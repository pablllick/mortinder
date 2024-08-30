import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import type { PersonType, FilterPeopleType } from '../type/charTypes';
import CharCard from '../ui/CharCard';

export default function MainPage(): JSX.Element {
  const [page, setPage] = React.useState(1);
  const [index, setIndex] = React.useState(0);
  const [person, setPerson] = useState<PersonType[]>([]);

  const plusClickHandler = (): void => {
    if (index + 1 === person.length) {

      setPage((prev) => prev + 1);
      setIndex(0);
    }
    setIndex((prev) => prev + 1);
  };

  useEffect(() => {
    axios<FilterPeopleType>(`https://rickandmortyapi.com/api/character/?page=${page}&status=alive`)
      .then((res) => {
        setPerson(res.data.results);
      })
      .catch(console.log);
  }, [page]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
      {person.length > 0 && <CharCard char={person[index]} plusClickHandler={plusClickHandler} />}
    </Box>
  );
}
