import { Icon } from "@iconify/react";

export default function WhatsAppButton() {
  const phoneNumber = "9311093150";
  const message = "Hi, I want to know more about your services.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-2xl z-50 transition-all duration-300"
    >
      <Icon icon="mdi:whatsapp" width="30" height="30" color="white" />
    </button>
  );
}