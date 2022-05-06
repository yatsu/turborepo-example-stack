import axios from 'axios';
import { useQuery } from 'react-query';
import { ToDo } from '../models/todo';

const baseUrl = 'http://localhost:3002/api';

function apiUrl(path: string, id?: number) {
  return id == null ? `${baseUrl}/${path}` : `${baseUrl}/${path}/${id}`;
}

async function getToDos(): Promise<ToDo[]> {
  const { data }: { data: ToDo[] } = await axios.get(apiUrl('todos'));
  return data;
}

export function useToDosQuery() {
  return useQuery('todos', getToDos);
}
