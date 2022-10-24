import EmptyState from '@/components/EmptyState';
import useSWR from 'swr';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth'
import SiteTable from '@/components/SiteTable';

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher);

  console.log(data);

  if (!data) {
    return <DashboardShell>
      <SiteTableSkeleton />
    </DashboardShell>
  }

  return (
  <DashboardShell>
    <h1>My sites</h1>
   {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
  </DashboardShell>
  )
}

export default Dashboard