import React, { FormEvent, useCallback, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefaults from '../../components/DefaultPage';
import FormField from '../../components/FormField';
import useForm from '../../hooks/useForm';
import api from '../../services/api';
import { CreateCategoryLink } from './styles';

interface CategoryFormList {
  id: number;
  titulo: string;
}

const CreateNewVideo: React.FC = () => {
  const initialData = {
    titulo: '',
    url: '',
    categoria: '',
  };
  const [listCategory, setListCategory] = useState<CategoryFormList[]>([]);
  const { formValue, handleNewCategory, resetForm } = useForm(initialData);
  const history = useHistory();

  const categoryTitle = listCategory.map(({ titulo }) => titulo);

  useEffect(() => {
    api.get('/Categorias').then(response => {
      setListCategory(response.data);
    });
  }, []);

  const choosedCategory = listCategory.find(
    item => item.titulo === formValue.item,
  );

  const handleSubmitVideo = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      if (formValue.titulo === '') {
        return;
      }

      await api.post('Videos', {
        titulo: formValue.titulo,
        url: formValue.url,
        categoriaId: choosedCategory?.id,
      });

      resetForm();
      history.push('/');
    },
    [formValue, history, choosedCategory, resetForm],
  );

  return (
    <PageDefaults>
      <h1>Cadastrar um novo vídeo</h1>
      <form onSubmit={handleSubmitVideo}>
        <FormField
          label="Titulo"
          name="titulo"
          type="text"
          value={formValue.titulo}
          onChange={handleNewCategory}
        />
        <FormField
          label="url do video"
          name="url"
          type="url"
          value={formValue.url}
          onChange={handleNewCategory}
        />
        <FormField
          label="Categoria"
          name="categoria"
          type="text"
          value={formValue.categoria}
          onChange={handleNewCategory}
          suggestions={categoryTitle}
        />
        <button className="SubimitButton" type="submit">
          Cadastrar
        </button>
      </form>
      <CreateCategoryLink to="/create/category">
        Criar Categoria
      </CreateCategoryLink>
    </PageDefaults>
  );
};

export default CreateNewVideo;
