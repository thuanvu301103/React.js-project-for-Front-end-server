import {
    ListItem, ListItemText, ListItemIcon,
    Link, Box
} from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FolderIcon from '@mui/icons-material/Folder';

const DesListItem = ({ item }) => {
    return (
        <Box sx={
            {
                bgcolor: 'background.paper',
                boxShadow: '0px 2px 2px rgba(0, 128, 0, 0.5)',
                m: 2,
                borderRadius: '8px'
            }}
        >
            <ListItem>
                <ListItemText
                    primary={
                        <Link
                            href="#"
                            variant="h6"
                            style={{ color: 'green', textDecoration: 'none', fontWeight: 'bold' }}
                        >
                            {item?.name ? item.name: 'Undefined name'}
                        </Link>
                    }
                    secondary={item?.description ? item.description : 'Undefined description'}
                />
            </ListItem>
        </Box>
        );
    }

const FileStructListItem = ({ item }) => {
    return (
        <Box sx={{ bgcolor: 'background.paper', mr: 2, ml: 2}}>
            <ListItem>
                <ListItemIcon>
                    {item.isFile ? <InsertDriveFileOutlinedIcon /> : <FolderIcon />}
                </ListItemIcon>
                <ListItemText
                    primary={item.name}
                />
            </ListItem>
        </Box>
    );
}

export { DesListItem, FileStructListItem };