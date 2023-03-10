import { FC } from 'react';
import Link from 'next/link';

const keywords = ['Popular', 'Wallpapers', 'Food', 'Cars', 'Animals'];

const SearchKeywords: FC = () => {
  return (
    <div className="hidden sm:flex items-center justify-center w-full pb-7 gap-3">
      {keywords.map((keyword, index) => (
        <Link
          key={index}
          className="theme-btn"
          href={'/search/' + keyword.toLowerCase()}
        >
          {keyword}
        </Link>
      ))}
    </div>
  );
};
export default SearchKeywords;
