import { createContext, useState, useEffect } from 'react';
import { ImpulseListProps } from '../types/impuse';
import { randomBackground } from '../utils/impulse';

export const useImpulse = () => {
    const [impulse, setImpulse] = useState<ImpulseListProps[]>([]);
    const [count, setCount] = useState(impulse.length);

    const handleAdd = () => {
        setImpulse((prev: ImpulseListProps[]) => [
            ...prev,
            {
                id: count,
                name: `Impulse ${count}`,
                details: {
                    description: 'This is a description',
                },
                backgroundColor: randomBackground(),
            },
        ]);
        setCount((prev: number) => prev + 1);
    };

    const handleRemove = (id: number) => {
        setImpulse((prev: ImpulseListProps[]) => prev.filter((item: ImpulseListProps) => item.id !== id));
    };


    useEffect(() => {
        if (count !== impulse.length) setCount(impulse.length);
    }, [impulse, count, setCount]);

    return {
        impulse,
        handleAdd,
        handleRemove,
        count,
    };
}