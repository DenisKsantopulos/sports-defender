import { useContext } from 'react';
import { RootStoreContext } from '@/shared/model/mobx/RootStoreContext';
import RootStore from '@/shared/model/mobx/RootStore';

// Возвращает все возможные MobX stores
export const useStores = () => {
	const context = useContext<RootStore | null>(RootStoreContext);

	if (context === null)
		throw new Error(
			'Looks like you forgot to wrap your parent component in the MobX Root Store Context provider!'
		);

	return context;
};
