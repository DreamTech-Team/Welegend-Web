import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBlogs() {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Tìm kiếm"
        className="px-4 py-2 focus:border-none text-base font-light leading rounded-s"
        style={{ width: '85%' }}
      />
      <button
        style={{
          backgroundColor: '#69727d',
          color: '#fff',
          width: '15%',
        }}
        className="px-4 py-2 rounded-e border-none"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
