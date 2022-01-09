import { styled } from '@mui/material/styles';
import Layout from '../layouts/Default';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AudioScanner from '../components/AudioScanner';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AddProduct() {

    const [formData, setFormData] = useState({})
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addProduct = () => {
        console.log(formData)
    }

    const mainAction = (
        <StyledFab color="secondary" aria-label="add" onClick={addProduct}>
            <AddIcon />
        </StyledFab>)

    const handleFieldChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        })
    }



    return (
        <Layout mainActionComponent={mainAction}>
            <FormControl sx={{ mb: 2 }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-Name">Name</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-Name"
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    type={'text'}
                    value={formData['name'] ? formData['name'] : ''}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                                onClick={handleOpen}
                            >
                                <KeyboardVoiceIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Name"
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <AudioScanner handleChange={(value) => { handleFieldChange('name', value); handleClose(); }} />
                    </Box>
                </Modal>
            </FormControl>
            <FormControl sx={{ mb: 2 }} fullWidth>
                <InputLabel id="parent-category">Parent Category</InputLabel>
                <Select
                    labelId="parent-category"
                    id="parent-category"
                    label="Parent Category"
                    onChange={(e) => handleFieldChange('parent_category', e.target.value)}
                    value={formData['parent_category'] ? formData['parent_category'] : ''}
                >
                    <MenuItem value="Baby Care">Baby Care</MenuItem>
                    <MenuItem value="Beverages">Beverages</MenuItem>
                    <MenuItem value="Biscuits & Snacks">Biscuits & Snacks</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ mb: 2 }} fullWidth>
                <InputLabel id="Sub-category">Sub Category</InputLabel>
                <Select
                    labelId="Sub-category"
                    id="Sub-category"
                    label="Sub Category"
                    onChange={(e) => handleFieldChange('sub_category', e.target.value)}
                    value={formData['sub_category'] ? formData['sub_category'] : ''}
                >
                    <MenuItem value="Chocolates & Candies">Chocolates & Candies</MenuItem>
                    <MenuItem value="Chips & Crisps">Chips & Crisps</MenuItem>
                    <MenuItem value="Sweets & Snacks">Sweets & Snacks</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ mb: 2 }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-Price">Price</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-Price"
                    type={'text'}
                    startAdornment={
                        <div>₹ </div>
                    }
                    onChange={(e) => handleFieldChange('price', e.target.value)}
                    value={formData['price'] ? formData['price'] : ''}
                    label="Price"
                />
            </FormControl>
            <FormControl sx={{ mb: 2 }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-Quantity">Quantity</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-Quantity"
                    type={'text'}
                    onChange={(e) => handleFieldChange('quantity', e.target.value)}
                    label="Quantity"
                    value={formData['quantity'] ? formData['quantity'] : ''}
                />
            </FormControl>
            <FormControl sx={{ mb: 2 }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-Weight">Weight</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-Weight"
                    type={'text'}
                    onChange={(e) => handleFieldChange('weight', e.target.value)}
                    label="Weight"
                    value={formData['weight'] ? formData['weight'] : ''}
                />
            </FormControl>
            <FormControl sx={{ mb: 2 }} fullWidth>
                <InputLabel id="Unit">Unit</InputLabel>
                <Select
                    labelId="Unit"
                    id="Unit"
                    label="Unit"
                    onChange={(e) => handleFieldChange('unit', e.target.value)}
                    value={formData['unit'] ? formData['unit'] : ''}
                >
                    <MenuItem value="Liter">Ltr</MenuItem>
                    <MenuItem value="Kg">Kg</MenuItem>
                    <MenuItem value="Cm">Cm</MenuItem>
                </Select>
            </FormControl>
        </Layout>
    );
}

export default AddProduct;
