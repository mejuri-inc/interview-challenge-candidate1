import MinusIcon from 'components/icons/minus';
import PlusIcon from 'components/icons/plus';

export default function EditItemQuantityButton() {
  return (
    <button
      aria-label={'Increase item quantity'}
      className={
        'ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900'
      }
    >
      <PlusIcon className="h-4 w-4" />
      <MinusIcon className="h-4 w-4" />
    </button>
  );
}
