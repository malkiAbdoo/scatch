import { FC } from 'react';
import { CgSearch } from 'react-icons/cg';

const SearchSection: FC = () => {
  return (
    <div className="mx-auto text-center py-10">
      <h2 className="text-5xl mb-8">
        Search for <span className="text-theme">images</span>
      </h2>
      <div className="max-w-[730px] text-lg flex items-center mx-auto rounded-3xl bg-gray-50 dark:bg-neutral-800 shadow-lg overflow-hidden transition-colors">
        <input
          type="search"
          className="h-full flex-grow outline-none bg-transparent py-2 px-4"
          autoComplete="off"
          placeholder="Search.."
          required
        />
        <button className="theme-btn py-2 px-7 rounded-inherit">
          <CgSearch size={30} className="inline text-center" />
        </button>
      </div>
    </div>
  );
};
export default SearchSection;
