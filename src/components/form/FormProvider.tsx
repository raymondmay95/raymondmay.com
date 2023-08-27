// form
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
    methods: UseFormReturn<any>;
    onSubmit?: VoidFunction;
    id?: string
};

export default function FormProvider({ children, onSubmit, methods, id }: Props) {
    return (
        <Form {...methods}>
            <form id={id} onSubmit={onSubmit}>{children}</form>
        </Form>
    );
}
