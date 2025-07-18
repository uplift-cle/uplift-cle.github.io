'use client';
import { motion } from 'framer-motion';
import { CardContent } from '../ui/card';
import { Users, Target, Lightbulb, Globe, Heart, Building } from 'lucide-react';
import MotionSection from '../motion/MotionSection';
import SpotlightCard from '../SpotlightCard';

export default function ValuesSection() {
    return (
        <section id="values" className="w-full py-16 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeIn' }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="space-y-4 text-center"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-100">
                            Core Values
                        </h2>
                        <p className="mx-auto max-w-[700px] text-white text-lg">
                            The fundamental principles that guide our work and
                            decision-making in every initiative we undertake.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {[
                            {
                                icon: <Users className="h-6 w-6 text-white" />,
                                gradient: 'from-[#0B7D44] to-green-700',
                                title: 'Community-Centered',
                                text: 'Every solution begins with listening to and learning from the communities we serve, ensuring their voices guide our approach.',
                            },
                            {
                                icon: <Target className="h-6 w-6 text-white" />,
                                gradient: 'from-blue-900 to-blue-700',
                                title: 'Evidence-Based',
                                text: 'We ground our interventions in rigorous research and data analysis to ensure effectiveness and measurable impact.',
                            },
                            {
                                icon: (
                                    <Lightbulb className="h-6 w-6 text-white" />
                                ),
                                gradient: 'from-teal-800 to-teal-600',
                                title: 'Interdisciplinary',
                                text: 'Complex problems require diverse perspectives. We bring together experts from multiple fields to create comprehensive solutions.',
                            },
                            {
                                icon: <Globe className="h-6 w-6 text-white" />,
                                gradient: 'from-slate-700 to-slate-800',
                                title: 'Scalable Impact',
                                text: 'We design interventions that can grow and adapt, creating lasting change that extends beyond individual projects.',
                            },
                            {
                                icon: <Heart className="h-6 w-6 text-white" />,
                                gradient: 'from-yellow-700 to-yellow-600',
                                title: 'Equity-Focused',
                                text: 'We prioritize addressing systemic inequities and ensuring our work benefits those who need it most.',
                            },
                            {
                                icon: (
                                    <Building className="h-6 w-6 text-white" />
                                ),
                                gradient: 'from-indigo-800 to-indigo-600',
                                title: 'Sustainable',
                                text: 'We build solutions that can be maintained and improved over time, creating lasting positive change for Cleveland.',
                            },
                        ].map(({ icon, gradient, title, text }, idx) => (
                            <MotionSection
                                key={idx}
                                className="flex"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: 'easeOut',
                                    delay: 0.2,
                                }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <SpotlightCard className="flex flex-col justify-between border border-white/10 w-full hover:shadow-lg transition-shadow bg-[#040705]">
                                    <CardContent className="p-8 space-y-4 flex flex-col flex-grow">
                                        <div
                                            className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center`}
                                        >
                                            {icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-100">
                                            {title}
                                        </h3>
                                        <p className="text-slate-400 flex-grow">
                                            {text}
                                        </p>
                                    </CardContent>
                                </SpotlightCard>
                            </MotionSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
