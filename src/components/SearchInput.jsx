import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';  // For SearchInput.jsx

export const SearchInput= ({onSearch})=>
{
    return(
        <div className="search-wrapper">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
                type="text"
                className="search-input"
                placeholder="Search for a country..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    )
}

