import api from "../api/axios";

export default function PaymentButton({ amount, description, itemData }) {
    const handlePayment = async () => {
        try {
            // Récupération des infos de l'utilisateur connecté depuis le localStorage si disponible
            const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

            const response = await api.post("/checkout", {
                amount: amount || 1000,
                description: description || "Achat sur L'Expo",
                firstname: storedUser.name ? storedUser.name.split(" ")[0] : "Client",
                lastname: storedUser.name ? storedUser.name.split(" ")[1] || "L'Expo" : "L'Expo",
                email: storedUser.email || "client@example.com",
                phone_number: "61000000", // Ou un champ saisi par l'utilisateur
            });

            if (response.data.success && response.data.payment_url) {
                window.location.href = response.data.payment_url;
            }
        } catch (error) {
            console.error("Erreur de paiement :", error);
            alert("Impossible d'initialiser le paiement.");
        }
    };

    return (
        <button
            onClick={handlePayment}
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full"
        >
            Payer {amount ? `${amount} FCFA` : ""}
        </button>
    );
}