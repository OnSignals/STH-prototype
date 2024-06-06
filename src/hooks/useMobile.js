import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQueries } from '@/styles/mixins/MediaQueries';

function useMobile() {
    return useMediaQuery(MediaQueries.mobile, false);
}

export { useMobile };
