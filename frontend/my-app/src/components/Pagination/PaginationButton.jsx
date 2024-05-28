import React,{useState} from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './pagination.css'


const PaginationButton = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    const hendelChange=(e,p)=>{
        setCurrentPage(p)
        props.onChangePage(p)
        console.log('////////////////////////////////////////////')
        console.log(p)
        console.log('////////////////////////////////////////////')
    }

    return (
        <div className='paginationButton' style={{backgroundColor:'#fff',}}>
            <Stack spacing={2}>
                <Pagination count={props.message} page={currentPage}  showFirstButton showLastButton onChange={hendelChange} />
            </Stack>
        </div>
    )
}

export default PaginationButton
