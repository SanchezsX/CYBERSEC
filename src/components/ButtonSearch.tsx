import cn from '../helpers/cn'

const ButtonSearch = () => {
  return (
    <button
      className={cn(
        'w-[60px] h-[60px] bg-[#2972FF]  rounded-[8px]',
        'flex flex-col items-center justify-center'
      )}
    >
      <img
        src="./icons/search.svg"
        alt="Search"
        className="size-[24px]"
      />
    </button>
  )
}

export default ButtonSearch
