import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function DefButtonGroup(props) {
    return (
        <ButtonGroup variant="contained">
            <Button 
                sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'darkgreen' } }}
            >
                {props.text1}
            </Button>
            <Button 
                sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'darkgreen' } }}
            >
                {props.text2}
            </Button>
        </ButtonGroup>
    );
}