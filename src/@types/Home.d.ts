interface HomeProps {
  service: {
    global: {
      general: {
        initialQty: number;
        initialValue: number;
      };
      yearly: {
        initialQty: number;
        initialValue: number;
      };
    };
  };
}

interface ServiceStateProps {
  global: {
    general: {
      initialQty: number;
      initialValue: number;
    };
    yearly: {
      initialQty: number;
      initialValue: number;
    };
  };
}

interface ButtonContentProps {
  title: string;
  text: string;
  sale_challenger: string;
  cost_challenger: string;
  personalization_challenger: string;
}
