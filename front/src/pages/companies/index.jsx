import { Box, Button, Card, TextField, Typography } from '@mui/material';
import Navbar from '../../components/navbar';
import { useRef } from 'react';
import TableData from '../../components/table';

function Companies() {
  const emailCompany = useRef(null);
  const nameCompany = useRef(null);
  const nameContact1 = useRef(null);
  const lastNameContact1 = useRef(null);
  const nameContact2 = useRef(null);
  const lastNameContact2 = useRef(null);

  const array = [
    {
      emailCompany: 'emailCompany',
      nameCompany: 'nameCompany',
      nameContact1: 'nameContact11',
      lastNameContact1: 'lastNameContact11',
      nameContact2: 'nameContact22',
      lastNameContact2: 'lastNameContact22'
    },
  ]

  const headers = ['emailCompany', 'nameCompany', 'nameContact1', 'lastNameContact1', 'nameContact2', 'lastNameContact2']

  return (
    <>
      <Navbar />
      <main>

        <Card variant>
          <Typography variant="h5">
            Preencha os dados da empresa
          </Typography>
          <form>
            <Box>
              <TextField
                sx={{ m: 2 }}
                id="nameCompany"
                label="Nome da empresa"
                name="nameCompany"
                type="text"
                required
                variant="standard"
                inputRef={nameCompany}
              />
              <TextField
                sx={{ m: 2 }}
                id="emailCompany"
                label="Email da empresa"
                name="emailCompany"
                type="text"
                required
                variant="standard"
                inputRef={emailCompany}
              />
            </Box>
            <Box>
              <TextField
                sx={{ m: 2 }}
                id="nameContact1"
                label="Nome contato 1"
                name="nameContact1"
                required
                variant="standard"
                inputRef={nameContact1} />
              <TextField
                sx={{ m: 2 }}
                id="lastNameContact1"
                label="Sobrenome do contato 1"
                name="lastNameContact1"
                type="text"
                required
                variant="standard"
                inputRef={lastNameContact1}
              />
            </Box>
            <Box>
              <TextField
                sx={{ m: 2 }}
                id="nameContact2"
                label="Nome contato 2"
                name="nameContact2"
                required
                variant="standard"
                inputRef={nameContact2} />
              <TextField
                sx={{ m: 2 }}
                id="lastNameContact2"
                label="Sobrenome do contato 2"
                name="lastNameContact2"
                type="text"
                required
                variant="standard"
                inputRef={lastNameContact2}
              />
            </Box>
            <Button variant="contained" type="submit">Registrar</Button>
          </form>
        </Card>
        <br></br>
        <TableData headers={headers} data={array} />
      </main>
    </>
  )

}

export default Companies;