import { ImpulseListProps } from './impuse';

export type BoxProps = ImpulseListProps & {
    handleRemove: (id: number) => void;
};
