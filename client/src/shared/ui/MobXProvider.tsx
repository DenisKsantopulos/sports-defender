import { memo } from 'react';
import RootStore from '@/shared/model/mobx/RootStore';
import { RootStoreContext } from '@/shared/model/mobx/RootStoreContext';

interface MobXProviderChildrenType {
	children: React.ReactNode;
}

const MobXProvider = memo(
	({ children }: MobXProviderChildrenType): React.ReactElement => {
		return (
			<RootStoreContext.Provider value={new RootStore()}>
				{children}
			</RootStoreContext.Provider>
		);
	}
);

export default MobXProvider;
