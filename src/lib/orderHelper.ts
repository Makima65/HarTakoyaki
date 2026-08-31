export const generateOrderSummary = (
  itemName: string,
  size: string,
  quantity: number,
  priceTotal: number
): string => {
  return `Konichiwa HarTakoyaki! 🐙\n\nI'd like to place an order:\n\n🛒 Item: ${quantity}x ${itemName}\n📏 Size: ${size}\n💰 Total: ₱${priceTotal}\n\nPlease let me know how to proceed with payment and delivery!`;
};

export const handleMessengerRedirect = async (
  pageId: string,
  orderText: string
): Promise<void> => {
  try {
    // Attempt to copy the order to the clipboard
    await navigator.clipboard.writeText(orderText);
    alert('Order details copied to clipboard! Paste them in the chat to order.');
  } catch (error) {
    console.error('Failed to copy text: ', error);
  } finally {
    // Open Messenger page regardless of clipboard success
    window.open(`https://m.me/${pageId}`, '_blank', 'noopener,noreferrer');
  }
};
