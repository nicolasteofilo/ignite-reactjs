import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const [session] = useSession();
    const router = useRouter();

    async function handleSubscribe() {
        if (!session) {
            signIn('github');
            return
        }

        if (session?.activeSubscription) {
          toast.info("Você já possui um inscrisão ativa 😀!", {
            autoClose: 4000,
            className: styles.toast,
            position: "bottom-center",
          });
          router.push('/posts');
          return;
        }
        
        try {
            const response = await api.post('/subscribe');
            
            const { sessionId } = response.data;
            
            const stripe = await getStripeJs()
            
            await stripe.redirectToCheckout({
                sessionId,
            })
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    }

    return (
        <button type="button" onClick={handleSubscribe} className={styles.subscribeButton}>
            Inscreva-se agora
        </button>
    );
}
