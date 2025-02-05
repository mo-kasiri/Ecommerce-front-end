interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    weight: number;
    dimensions: { width: number, height: number, depth: number };
    warrantyInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    thumbnail: string;
    image: string;
}

interface Review {
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
}