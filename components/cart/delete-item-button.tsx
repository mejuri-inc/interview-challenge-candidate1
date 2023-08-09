import CloseIcon from 'components/icons/close';

export default function DeleteItemButton({ item }: any) {
  return (
    <button
      aria-label="Remove cart item"
      className={
        'ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900'
      }
    >
      <CloseIcon className="hover:text-accent-3 mx-[1px] h-4 w-4" />
    </button>
  );
}
