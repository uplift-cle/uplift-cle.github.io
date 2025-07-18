'use client';
import { useState } from 'react';

export default function SpotlightCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

    function onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }

    function onMouseLeave() {
        setCoords(null);
    }

    return (
        <div
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className={`relative overflow-hidden rounded-lg transition-shadow duration-300 ${className}`}
            style={{
                // spotlight circle that moves with mouse
                backgroundImage: coords
                    ? `radial-gradient(circle 120px at ${coords.x}px ${coords.y}px, rgba(12, 82, 47, 0.6), transparent 80%)`
                    : undefined,
                boxShadow: coords
                    ? '0 0 15px rgba(12, 82, 47, 0.7)'
                    : undefined,
            }}
        >
            {children}
        </div>
    );
}
