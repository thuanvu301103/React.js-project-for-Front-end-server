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