import { useState, useEffect, useRef } from 'react';
import AccountItem from 'components/AccountsItem';
import HeadlessTippy from '@tippyjs/react/headless';
import MenuItem from '../Popper/Menu/MenuItem';
import Image from 'components/Image';
import { Wrapper as PopperWrapper } from '../Popper';
import { ImSearch } from 'react-icons/im';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from 'hook';

const cx = classNames.bind(styles);

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounce=useDebounce(searchValue, 500)

  const inputRef = useRef();
  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([])
      return;
    }
    setLoading(true)

    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(()=>{
        setLoading(false)
      })
  }, [debounce]);

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
    setSearchResult([]);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attts) => (
        <div className={cx('search-result')} tabIndex="-1" {...attts}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <IoIosCloseCircleOutline />
          </button>
        )}
        {loading&& <AiOutlineLoading3Quarters className={cx('loading')} />}

        <button className={cx('search-btn')}>
          <ImSearch />
        </button>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
