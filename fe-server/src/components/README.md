# Components

This folder contains reusable React components used throughout the project. Each component is designed to be modular and easy to integrate into different parts of the application.

## Navigation bar - ```Navbar```

- **Description**: A component that represents a navigation bar of a page.
- **Props**: None
- **Usage**:
```javascript
import Navbar from './components/Navbar';
<Navbar />
```

## Footer - ```Footer```

- **Description**: A component that represents footer.
- **Props**: None
- **Usage**:
```javascript
import Footer from './components/Footer';
<Footer />
```

## List Item - ```ListItem```

### Descriptive List Item - ```DesListItem```

- **Description**: A component that represents a descriptive item of a list.
- **Props**:
	- `item` (object): contains name and decription.
		- `name` (string): The name of the item.
		- `description` (string): The description of the item.
- **Usage**:
```javascript
import { DesListItem } from './components/ListItem';
<DesListItem item={item} />
```

### File Structure List Item - ```FileStructListItem```

- **Description**: A component that represents an item of a file structure list.
- **Props**:
	- `item` (object): Contains name and decription.
		- `name` (string): The name of the item.
		- `isFile` (Boolean): Indicate whether an item is a file or a folder.
- **Usage**:
```javascript
import { FileStructListItem } from './components/ListItem';
<FileStructListItem item={item} />
```

## List - ```List```

### List with Pagination - ```PaginatedList```

- **Description**: A component that represents a list with pagination bar.
- **Props**:
	- `ListItemComponents` (`ListItem` object): object that is the item of list
	- `items` (Array(object)): the properties of object must correspond to `ListItemComponents`
	- `itemsPerPage` (number): Max number of item per page of list. Default value: 30
- **Usage**:
```javascript
import { PaginatedList } from './components/List';
import { FileStructListItem } from './components/ListItem';
<DesListItem ListItemComponents={FileStructListItem} items={items} />
```

### Normal List - ```List```

- **Description**: A component that represents a list.
- **Props**:
	- `ListItemComponents` (`ListItem` object): object that is the item of list
	- `items` (Array(object)): the properties of object must correspond to `ListItemComponents`
- **Usage**:
```javascript
import { List } from './components/List';
import { FileStructListItem } from './components/ListItem';
<List ListItemComponents={FileStructListItem} items={items} />
```