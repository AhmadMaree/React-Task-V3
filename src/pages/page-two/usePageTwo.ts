import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { validationSchemaPatient } from "./validators";
import { z } from "zod";

type TFormData = z.infer<typeof validationSchemaPatient>;

const usePageTwo = () => {

    const [workspaceOptions, setWorkspaceOptions] = useState<string[]>(['Workspace 1', 'Workspace 2']);
    const { control, handleSubmit, register, reset, formState: { errors } } = useForm<TFormData>({
        resolver: zodResolver(validationSchemaPatient),
        defaultValues: {
            gender: '',
            birthDate: null,
            disorders: [],
            workspaceTemplate: '',
        },
    });

    const onSubmit = (data: TFormData) => {
        alert(JSON.stringify(data, null, 2));
    };

    const handleAddNewWorkspace = () => {
        const newWorkspaceOptions = `Workspace ${workspaceOptions.length + 1}`;
        setWorkspaceOptions([...workspaceOptions, newWorkspaceOptions]);
    }

    const handleCancel = () => {
        reset({
            gender: '',
            birthDate: null,
            disorders: [],
            workspaceTemplate: '',
        });
    };

    return {
        errors,
        register,
        handleSubmit,
        control,
        handleAddNewWorkspace,
        onSubmit,
        workspaceOptions,
        handleCancel
    }
}
export default usePageTwo;