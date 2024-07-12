import { SWRConfig } from 'swr';
import fetcher from '@/shared/api/fetcher';
import { memo } from 'react';

interface SWRProviderChildrenType {
	children: React.ReactNode;
}

const SWRProvider = memo(
	({ children }: SWRProviderChildrenType): React.ReactElement => {
		return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
	}
);

export default SWRProvider;
