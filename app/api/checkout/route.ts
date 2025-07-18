import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-05-28.basil',
});

const priceID = 'price_1ReeNE4ZUPsJ78EADnGbvvyJ'; // Hardcoded for right now: Will be changed later.

export async function POST(req: NextRequest) {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price: priceID,
                    quantity: 1,
                },
            ],
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate/cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error('Error creating Stripe session:', error);
        return NextResponse.json(
            { error: 'Failed to create session' },
            { status: 500 }
        );
    }
}
