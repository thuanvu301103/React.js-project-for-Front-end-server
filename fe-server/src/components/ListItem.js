import {
    ListItem, ListItemText,
    Link, Box
} from '@mui/material';

const DesListItem = ({ name, description }) => {
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
                                {name}
                            </Link>
                        }
                        secondary={description}
                    />
                </ListItem>
            </Box>
        );
    }

const FileStructListItem = ({ name, isFile }) => {
    return (
        <Box sx={{ bgcolor: 'background.paper', m: 2 }}>
            <ListItem>
                <ListItemIcon>
                    {isFile ? <InsertDriveFileOutlinedIcon /> : <FolderIcon />}
                </ListItemIcon>
                <ListItemText
                    primary={name}
                />
            </ListItem>
        </Box>
    );
}

export { DesListItem, FileStructListItem };