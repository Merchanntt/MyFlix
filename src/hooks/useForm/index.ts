import { useCallback, ChangeEvent, useState } from 'react';

interface FormData {
  [title: string]: string;
}

function useForm(initialDataValue: FormData) {
  const [formValue, setFormValue] = useState<FormData>({});

  const handleNewDescription = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const descricao = event.target.value;

      setFormValue({ ...formValue, descricao });
    },
    [formValue],
  );

  const handleNewCategory = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setFormValue({ ...formValue, [name]: value });
    },
    [formValue],
  );

  const resetForm = useCallback(() => {
    setFormValue(initialDataValue);
  }, [initialDataValue]);

  return {
    formValue,
    handleNewCategory,
    handleNewDescription,
    resetForm,
  };
}

export default useForm;
