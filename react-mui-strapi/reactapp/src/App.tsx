import { Button, Stack } from '@mui/material'
import { Delete, Send, Photo } from '@mui/icons-material'

function App() {
  return (
    <>
      <h1>MUI Button</h1>
      <Stack spacing={2} direction='row'>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>

      <h1>MUI Button with Icons</h1>
      <Stack spacing={2} direction={'row'}>
        <Button variant='text' startIcon={<Delete />}>
          Delete
        </Button>
        <Button variant='contained' startIcon={<Send />}>
          Contained
        </Button>
        <Button variant='outlined' startIcon={<Photo />}>
          Outlined
        </Button>
      </Stack>
    </>
  )
}

export default App
