import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from '../api/auth.api';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: logout,

    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ['me'],
      });

      router.push('/');
    },
  });
}