import React, { useState, useCallback, FormEvent, useEffect } from 'react';

import PageDefaults from '../../components/DefaultPage';
import FormField from '../../components/FormField';
import FormFieldTextArea from '../../components/FormField/TextArea';
import api from '../../services/api';
import useForm from '../../hooks/useForm';

import './styles.css';

interface CategoryFormList {
  id?: number;
  titulo: string;
  descricao: string;
  cor: string;
}

const CreateCategory: React.FC = () => {
  const initialData = {
    titulo: '',
    descricao: '',
    cor: '#E83368',
  };
  const [listCategory, setListCategory] = useState<CategoryFormList[]>([]);

  const {
    formValue,
    handleNewCategory,
    handleNewDescription,
    resetForm,
  } = useForm(initialData);

  useEffect(() => {
    async function loadingList() {
      const response = await api.get('/Categorias');

      setListCategory(response.data);
    }
    resetForm();
    loadingList();
  }, []);

  const handleSubmitCategory = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      if (formValue.titulo === '') {
        return;
      }

      await api.post('Categorias', formValue);

      setListCategory([
        ...listCategory,
        {
          titulo: formValue.titulo,
          descricao: formValue.descricao,
          cor: formValue.cor,
        },
      ]);
      resetForm();
    },
    [listCategory, formValue, resetForm],
  );

  return (
    <PageDefaults>
      <h1>Cadastrar categoria: {formValue.titulo} </h1>
      <form onSubmit={handleSubmitCategory}>
        <FormField
          label="Nome da categoria"
          name="titulo"
          type="text"
          value={formValue.titulo}
          onChange={handleNewCategory}
        />

        <FormFieldTextArea
          label="Descrição"
          name="descricao"
          value={formValue.descricao}
          onChange={handleNewDescription}
        />

        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={formValue.cor}
          onChange={handleNewCategory}
        />

        <button className="SubimitButton" type="submit">
          Cadastrar
        </button>
      </form>

      <ul>
        {listCategory.map(category => (
          <li key={category.id}>{category.titulo}</li>
        ))}
      </ul>
    </PageDefaults>
  );
};

export default CreateCategory;
