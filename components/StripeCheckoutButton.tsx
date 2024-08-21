"use client"

import { ONTAPURL } from '@/lib';
import {loadStripe} from '@stripe/stripe-js'
import { useState } from 'react';

console.log(process.env.NEXT_STRIPE_PUBLISHABLE_KEY)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '');

type ButtonProps = {
    children: React.ReactNode
}

const Button = ({ onClick, children, ...rest }: ButtonProps & React.ComponentProps<'button'>) => (
    <button className="inline-flex items-center px-6 py-3 bg-primary-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150" onClick={onClick} {...rest}>
        {children}
    </button>
)


export default function StripeCheckoutButton({ priceId }: { priceId: string}) {
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        const res = await fetch(`${ONTAPURL}/api/stripe/checkout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ priceId })
        })

        const { id } = await res.json()

        // Redirect to Stripe Checkout
        const stripe = await stripePromise;

        if (!stripe) {
            console.error('Stripe initialization failed.');
            setLoading(false);
            return;
        }

        const { error } = await stripe.redirectToCheckout({ sessionId: id });

        if (error) {
            console.error('Stripe checkout error:', error);
            setLoading(false);
        }
    }

    return (
        <Button onClick={handleClick} disabled={loading}>
            { loading ? 'Processing' : 'Checkout'}
        </Button>
    )
}