
/* --- EXTENSIVE MENU DATA --- */
function getImg(cat, name) {
    const n = name.toLowerCase();
    if (n.includes('prawn')) return 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80';
    if (n.includes('crab')) return 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=500&q=80';
    if (n.includes('fish') || n.includes('pomfret') || n.includes('surmai')) return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80';
    if (n.includes('biryani')) return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80';
    if (n.includes('tandoori') || n.includes('tikka') || n.includes('kabab')) return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80';
    if (n.includes('paneer')) return 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80';
    if (n.includes('mushroom')) return 'https://images.unsplash.com/photo-1625938145744-e38051524294?auto=format&fit=crop&w=500&q=80';
    if (n.includes('manchurian') || n.includes('fried rice')) return 'https://images.unsplash.com/photo-1603133872878-684f1084261d?auto=format&fit=crop&w=500&q=80';
    if (n.includes('noodles')) return 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80';
    if (n.includes('thai')) return 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80';
    if (n.includes('sizzler')) return 'https://images.unsplash.com/photo-1574484284008-be9d62829144?auto=format&fit=crop&w=500&q=80';
    if (n.includes('soup')) return 'https://images.unsplash.com/photo-1547592166-23acbe3a624b?auto=format&fit=crop&w=500&q=80';
    if (n.includes('mojito') || n.includes('lime')) return 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80';
    if (n.includes('brownie') || n.includes('toffee')) return 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=500&q=80';
    if (n.includes('roti') || n.includes('naan')) return 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=500&q=80';
    if (cat === 'Salad/Papad') return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80';
    return 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80';
}

const menuDataRaw = [
    { cat: "Soup", name: "Sweet Corn Soup", price: 170, veg: true },
    { cat: "Soup", name: "Manchow Soup", price: 160, veg: true },
    { cat: "Soup", name: "Hot & Sour Soup", price: 160, veg: true },
    { cat: "Soup", name: "Wanton Soup", price: 170, veg: true },
    { cat: "Soup", name: "Clear Soup", price: 160, veg: true },
    { cat: "Soup", name: "Tom Yum Soup", price: 180, veg: true },
    { cat: "Soup", name: "Mushroom Soup", price: 180, veg: true },
    { cat: "Soup", name: "Noodles Soup", price: 180, veg: true },
    { cat: "Soup", name: "Sweet Corn Chicken Soup", price: 190, veg: false },
    { cat: "Soup", name: "Chicken Manchow Soup", price: 180, veg: false },
    { cat: "Soup", name: "Hot & Sour Chicken Soup", price: 180, veg: false },
    { cat: "Soup", name: "Chicken Lung Fung Soup", price: 190, veg: false },
    { cat: "Soup", name: "Chicken Wanton Soup", price: 180, veg: false },
    { cat: "Soup", name: "Chicken Tom Yum Soup", price: 200, veg: false },
    { cat: "Soup", name: "Meat Ball Chicken Soup", price: 200, veg: false },
    { cat: "Soup", name: "Chicken Mushroom Soup", price: 200, veg: false },
    { cat: "Soup", name: "Chicken Noodles Soup", price: 200, veg: false },
    { cat: "Soup", name: "Chicken C. Soup", price: 200, veg: false },
    { cat: "Soup", name: "Tomato / Dal Soup", price: 190, veg: true },
    { cat: "Soup", name: "Dal Soup", price: 190, veg: true },
    { cat: "Soup", name: "Mulk Dani Soup", price: 200, veg: true },

    { cat: "Starters", name: "Paneer Pahadi Tikka (6pcs)", price: 285, veg: true },
    { cat: "Starters", name: "Paneer Malai Tikka (6pcs)", price: 285, veg: true },
    { cat: "Starters", name: "Mushroom Baby-Corn Tikka (8pcs)", price: 280, veg: true },
    { cat: "Starters", name: "Multani Mushroom (8pcs)", price: 280, veg: true },
    { cat: "Starters", name: "Paneer Cheese Seek Kabab", price: 285, veg: true },
    { cat: "Starters", name: "Paneer Tikka (6pcs)", price: 280, veg: true },
    { cat: "Starters", name: "Paneer Lasuni Tikka", price: 285, veg: true },
    { cat: "Starters", name: "Paneer Sunhari Tikka", price: 285, veg: true },
    { cat: "Starters", name: "Paneer Amritsari Tikka", price: 285, veg: true },
    { cat: "Starters", name: "Paneer Banjara Tikka", price: 285, veg: true },
    { cat: "Starters", name: "Paneer Achari Tikka", price: 285, veg: true },
    { cat: "Starters", name: "Tandoori Aloo / Gobi", price: 270, veg: true },
    { cat: "Starters", name: "Tandoori Mushroom", price: 280, veg: true },
    { cat: "Starters", name: "Aloo Najakat", price: 275, veg: true },
    { cat: "Starters", name: "Paneer Platter (12pcs)", price: 590, veg: true },
    { cat: "Starters", name: "Veg Platter (12pcs)", price: 510, veg: true },
    { cat: "Starters", name: "Soya Chap", price: 260, veg: true },

    { cat: "Starters", name: "Tandoori Chicken (Half)", price: 250, veg: false },
    { cat: "Starters", name: "Tandoori Chicken (Full)", price: 360, veg: false },
    { cat: "Starters", name: "Tandoori Chicken Pahadi (Half)", price: 260, veg: false },
    { cat: "Starters", name: "Tandoori Chicken Pahadi (Full)", price: 370, veg: false },
    { cat: "Starters", name: "Tandoori Chicken Kalimiri (Half)", price: 260, veg: false },
    { cat: "Starters", name: "Tandoori Chicken Kalimiri (Full)", price: 370, veg: false },
    { cat: "Starters", name: "Tiranga Kabab (6pcs)", price: 295, veg: false },
    { cat: "Starters", name: "Tandoori Lollipops Red (6pcs)", price: 280, veg: false },
    { cat: "Starters", name: "Tandoori Lollipops Green (6pcs)", price: 285, veg: false },
    { cat: "Starters", name: "Tandoori Lollipops Kalimiri (6pcs)", price: 285, veg: false },
    { cat: "Starters", name: "Chicken Achari Tikka", price: 290, veg: false },
    { cat: "Starters", name: "Chicken Tikka Red", price: 280, veg: false },
    { cat: "Starters", name: "Chicken Tikka Pahadi", price: 285, veg: false },
    { cat: "Starters", name: "Chicken Tikka Lasuni", price: 285, veg: false },
    { cat: "Starters", name: "Chicken Tikka Kalimiri", price: 285, veg: false },
    { cat: "Starters", name: "Chicken Sheek Kabab", price: 285, veg: false },
    { cat: "Starters", name: "Chicken Banjara Kabab", price: 295, veg: false },
    { cat: "Starters", name: "Chicken Cheese Seek Kabab", price: 300, veg: false },
    { cat: "Starters", name: "Chicken Seek Kabab", price: 295, veg: false },
    { cat: "Starters", name: "Chicken Platter (Half)", price: 660, veg: false },
    { cat: "Starters", name: "Chicken Platter (Full)", price: 1280, veg: false },

    { cat: "Starters", name: "Baby Surmai Tandoori", price: 570, veg: false },
    { cat: "Starters", name: "Pomfret Tandoori", price: 550, veg: false },
    { cat: "Starters", name: "Fish Tikka Tandoori", price: 295, veg: false },
    { cat: "Starters", name: "Prawns Tandoori/Lasuni", price: 530, veg: false },

    { cat: "Starters", name: "Harabhara Kabab", price: 220, veg: true },
    { cat: "Starters", name: "Mushroom Koliwada", price: 250, veg: true },
    { cat: "Starters", name: "Paneer Koliwada", price: 250, veg: true },
    { cat: "Starters", name: "Veg Cheese Chilly Tikki", price: 250, veg: true },
    { cat: "Starters", name: "Paneer Pakoda", price: 250, veg: true },
    { cat: "Starters", name: "Mix Veg Pakoda", price: 245, veg: true },
    { cat: "Starters", name: "Cheese Corn Balls", price: 260, veg: true },
    { cat: "Starters", name: "Cheese Pakoda", price: 260, veg: true },
    { cat: "Starters", name: "Aloo Pudina Tikka", price: 220, veg: true },
    { cat: "Starters", name: "Aloo Corn Tikki", price: 230, veg: true },
    { cat: "Starters", name: "Bhendi Rajasthani", price: 230, veg: true },

    { cat: "Starters", name: "Chicken Tawa Fry", price: 295, veg: false },
    { cat: "Starters", name: "Chicken Koliwada", price: 295, veg: false },
    { cat: "Starters", name: "Prawns Koliwada", price: 450, veg: false },
    { cat: "Starters", name: "Prawns Tawa Fry", price: 450, veg: false },
    { cat: "Starters", name: "Surmai Tawa Fry", price: 510, veg: false },
    { cat: "Starters", name: "Pomfret Tawa Fry", price: 530, veg: false },
    { cat: "Starters", name: "Bangda Tawa Fry", price: 250, veg: false },
    { cat: "Starters", name: "Fish Tawa Fry", price: 295, veg: false },

    { cat: "Starters", name: "Potato Honey Crispy", price: 235, veg: true },
    { cat: "Starters", name: "Potato Chilli Dry", price: 235, veg: true },
    { cat: "Starters", name: "Soyabeen Chilli Dry", price: 230, veg: true },
    { cat: "Starters", name: "Veg Manchurian Dry", price: 235, veg: true },
    { cat: "Starters", name: "Veg 65 Dry", price: 235, veg: true },
    { cat: "Starters", name: "Veg Crispy", price: 235, veg: true },
    { cat: "Starters", name: "Paneer Crispy", price: 270, veg: true },
    { cat: "Starters", name: "Paneer Chilli Dry", price: 270, veg: true },
    { cat: "Starters", name: "Paneer Garlic Dry", price: 270, veg: true },
    { cat: "Starters", name: "Veg Sesame Tossed", price: 230, veg: true },
    { cat: "Starters", name: "Veg Spring Roll", price: 260, veg: true },
    { cat: "Starters", name: "Mushroom Crispy", price: 270, veg: true },
    { cat: "Starters", name: "Mushroom Chilli Dry", price: 270, veg: true },
    { cat: "Starters", name: "Mushroom 65 Dry", price: 270, veg: true },
    { cat: "Starters", name: "Paneer Sate", price: 290, veg: true },

    { cat: "Starters", name: "Chicken Roasted Dry", price: 275, veg: false },
    { cat: "Starters", name: "Chicken Korean Dry", price: 275, veg: false },
    { cat: "Starters", name: "Chicken Barbeque", price: 280, veg: false },
    { cat: "Starters", name: "Golden Fried Chicken", price: 280, veg: false },
    { cat: "Starters", name: "Salt & Pepper Chicken", price: 280, veg: false },
    { cat: "Starters", name: "Chicken Spring Rolls", price: 295, veg: false },
    { cat: "Starters", name: "Chicken Toranest", price: 295, veg: false },
    { cat: "Starters", name: "Chicken Sesame Tossed", price: 295, veg: false },
    { cat: "Starters", name: "Chicken 65", price: 280, veg: false },
    { cat: "Starters", name: "Chicken Chilly Dry", price: 280, veg: false },
    { cat: "Starters", name: "Chicken Crispy", price: 280, veg: false },
    { cat: "Starters", name: "Chicken Garlic Dry", price: 280, veg: false },
    { cat: "Starters", name: "Chicken Lollypops (6pcs)", price: 260, veg: false },
    { cat: "Starters", name: "Chicken Chilly Oyster Sauce", price: 295, veg: false },
    { cat: "Starters", name: "Chicken Black Bean", price: 295, veg: false },
    { cat: "Starters", name: "Chicken Manchurian Dry", price: 280, veg: false },
    { cat: "Starters", name: "Chicken Sanghai", price: 290, veg: false },
    { cat: "Starters", name: "Chicken Sate", price: 295, veg: false },
    { cat: "Starters", name: "Chicken Lollypop Masala", price: 360, veg: false },
    { cat: "Starters", name: "Chicken Lemon Chilly Dry", price: 280, veg: false },
    { cat: "Starters", name: "Chicken Sweet & Sour", price: 280, veg: false },

    { cat: "Starters", name: "Fish Chilly Dry", price: 360, veg: false },
    { cat: "Starters", name: "Fish Schezwan Dry", price: 360, veg: false },
    { cat: "Starters", name: "Sanghai Fish", price: 360, veg: false },
    { cat: "Starters", name: "Prawns Chilly Dry", price: 395, veg: false },
    { cat: "Starters", name: "Prawns 65 Dry", price: 395, veg: false },
    { cat: "Starters", name: "Prawns Crispy", price: 395, veg: false },
    { cat: "Starters", name: "Prawns Black Bean", price: 395, veg: false },

    { cat: "Main Course", name: "Malini Special Veg Masala", price: 280, veg: true },
    { cat: "Main Course", name: "Corn Capsicum Masala", price: 260, veg: true },
    { cat: "Main Course", name: "Aloo Mutter", price: 250, veg: true },
    { cat: "Main Course", name: "Aloo Jeera", price: 230, veg: true },
    { cat: "Main Course", name: "Aloo Gobi Masala", price: 230, veg: true },
    { cat: "Main Course", name: "Aloo Methi", price: 230, veg: true },
    { cat: "Main Course", name: "Methi Palak", price: 250, veg: true },
    { cat: "Main Course", name: "Mix Veg / Kolhapuri", price: 250, veg: true },
    { cat: "Main Course", name: "Chana Masala", price: 245, veg: true },
    { cat: "Main Course", name: "Methi Malai Mutter", price: 250, veg: true },
    { cat: "Main Course", name: "Paneer Butter Masala", price: 270, veg: true },
    { cat: "Main Course", name: "Paneer Tikka Masala", price: 280, veg: true },
    { cat: "Main Course", name: "Paneer Amritsari", price: 270, veg: true },
    { cat: "Main Course", name: "Paneer Peshawari", price: 270, veg: true },
    { cat: "Main Course", name: "Paneer Makhanwala", price: 270, veg: true },
    { cat: "Main Course", name: "Paneer Tawa Masala", price: 270, veg: true },
    { cat: "Main Course", name: "Palak Paneer", price: 280, veg: true },
    { cat: "Main Course", name: "Paneer Kaju Masala", price: 280, veg: true },
    { cat: "Main Course", name: "Mushroom Masala", price: 280, veg: true },
    { cat: "Main Course", name: "Paneer Dopayza", price: 270, veg: true },
    { cat: "Main Course", name: "Paneer Kolhapuri", price: 270, veg: true },
    { cat: "Main Course", name: "Paneer Jaipuri/Jalfrezi", price: 270, veg: true },
    { cat: "Main Course", name: "Paneer Makhmali", price: 270, veg: true },
    { cat: "Main Course", name: "Paneer Pasanda", price: 270, veg: true },
    { cat: "Main Course", name: "Paneer Angara", price: 280, veg: true },
    { cat: "Main Course", name: "Paneer Handi/Kadai", price: 270, veg: true },
    { cat: "Main Course", name: "Veg Kofta", price: 280, veg: true },
    { cat: "Main Course", name: "Paneer Kofta", price: 290, veg: true },
    { cat: "Main Course", name: "Dum Aloo Punjabi", price: 260, veg: true },
    { cat: "Main Course", name: "Veg Jaipuri/Handi", price: 260, veg: true },
    { cat: "Main Course", name: "Veg Patiyala", price: 260, veg: true },
    { cat: "Main Course", name: "Veg Begambahar", price: 260, veg: true },
    { cat: "Main Course", name: "Veg Maharaja", price: 270, veg: true },
    { cat: "Main Course", name: "Veg Diwani Handi", price: 270, veg: true },
    { cat: "Main Course", name: "Baigan Bharta", price: 280, veg: true },
    { cat: "Main Course", name: "Bhendi Masala", price: 260, veg: true },
    { cat: "Main Course", name: "Bhendi Do Pyaza", price: 260, veg: true },
    { cat: "Main Course", name: "Veg Tawa Masala", price: 250, veg: true },

    { cat: "Main Course", name: "Chicken Masala/Curry", price: 295, veg: false },
    { cat: "Main Course", name: "Chicken Patiyala", price: 320, veg: false },
    { cat: "Main Course", name: "Chicken Amritsari", price: 295, veg: false },
    { cat: "Main Course", name: "Chicken Kolhapuri", price: 295, veg: false },
    { cat: "Main Course", name: "Chicken Bhuna", price: 295, veg: false },
    { cat: "Main Course", name: "Chicken Tikka Masala", price: 310, veg: false },
    { cat: "Main Course", name: "Butter Chicken (Boneless)", price: 310, veg: false },
    { cat: "Main Course", name: "Chicken Mughlai", price: 295, veg: false },
    { cat: "Main Course", name: "Chicken Mirch Masala", price: 295, veg: false },
    { cat: "Main Course", name: "Chicken Jaipuri", price: 295, veg: false },
    { cat: "Main Course", name: "Chicken Angara", price: 310, veg: false },
    { cat: "Main Course", name: "Chicken Hyderabadi", price: 295, veg: false },
    { cat: "Main Course", name: "Chicken Reshmi Masala", price: 295, veg: false },
    { cat: "Main Course", name: "Chicken Do-pyaza", price: 295, veg: false },
    { cat: "Main Course", name: "Chicken Handi", price: 295, veg: false },
    { cat: "Main Course", name: "Chicken Tangadi Masala", price: 295, veg: false },
    { cat: "Main Course", name: "Chicken Vindaloo", price: 295, veg: false },
    { cat: "Main Course", name: "Chicken Tawa Masala", price: 295, veg: false },
    { cat: "Main Course", name: "Murg Mussallam (Half)", price: 520, veg: false },
    { cat: "Main Course", name: "Murg Mussallam (Full)", price: 895, veg: false },
    { cat: "Main Course", name: "Chicken Rogan Josh", price: 295, veg: false },
    { cat: "Main Course", name: "Mutton Masala", price: 390, veg: false },
    { cat: "Main Course", name: "Mutton Kadai", price: 390, veg: false },
    { cat: "Main Course", name: "Mutton Rogan Josh", price: 390, veg: false },
    { cat: "Main Course", name: "Mutton Mughlai", price: 390, veg: false },
    { cat: "Main Course", name: "Egg Masala/Curry", price: 250, veg: false },

    { cat: "Main Course", name: "Dal Fry", price: 190, veg: true },
    { cat: "Main Course", name: "Dal Tadka", price: 200, veg: true },
    { cat: "Main Course", name: "Dal Kolhapuri", price: 220, veg: true },
    { cat: "Main Course", name: "Dal Makhani", price: 230, veg: true },

    { cat: "Malvani", name: "Chicken Malvani (4pcs)", price: 295, veg: false },
    { cat: "Malvani", name: "Chicken Handi (Half)", price: 450, veg: false },
    { cat: "Malvani", name: "Chicken Handi (Full)", price: 690, veg: false },
    { cat: "Malvani", name: "Chicken Sukkha", price: 295, veg: false },
    { cat: "Malvani", name: "Chicken Lapeta (Half)", price: 510, veg: false },
    { cat: "Malvani", name: "Chicken Lapeta (Full)", price: 720, veg: false },
    { cat: "Malvani", name: "Mutton Handi (Half)", price: 660, veg: false },
    { cat: "Malvani", name: "Mutton Handi (Full)", price: 1200, veg: false },
    { cat: "Malvani", name: "Mutton Sukkha", price: 395, veg: false },
    { cat: "Malvani", name: "Fish Goan Curry", price: 395, veg: false },
    { cat: "Malvani", name: "Prawns/Surmai Curry", price: 510, veg: false },
    { cat: "Malvani", name: "Prawns Masala", price: 495, veg: false },
    { cat: "Malvani", name: "Pomfret Masala", price: 560, veg: false },
    { cat: "Malvani", name: "Crab Sukka/Masala", price: 560, veg: false },

    { cat: "Rice", name: "Steamed Rice", price: 160, veg: true },
    { cat: "Rice", name: "Jeera Rice", price: 170, veg: true },
    { cat: "Rice", name: "Veg Pulav", price: 230, veg: true },
    { cat: "Rice", name: "Paneer Pulav", price: 230, veg: true },
    { cat: "Rice", name: "Paneer Biryani", price: 250, veg: true },
    { cat: "Rice", name: "Veg Biryani", price: 245, veg: true },
    { cat: "Rice", name: "Veg Hyderabadi Biryani", price: 230, veg: true },
    { cat: "Rice", name: "Veg Dum Biryani", price: 250, veg: true },
    { cat: "Rice", name: "Dal Khichdi", price: 230, veg: true },
    { cat: "Rice", name: "Dal Khichdi Tadka", price: 250, veg: true },
    { cat: "Rice", name: "Murg Pulav", price: 250, veg: false },
    { cat: "Rice", name: "Murg Tawa Pulav", price: 245, veg: false },
    { cat: "Rice", name: "Murg Biryani", price: 260, veg: false },
    { cat: "Rice", name: "Murg Dum Biryani", price: 270, veg: false },
    { cat: "Rice", name: "Chicken Tikka Biryani", price: 280, veg: false },
    { cat: "Rice", name: "Murg Lucknowi Biryani", price: 290, veg: false },
    { cat: "Rice", name: "Mutton Biryani", price: 390, veg: false },
    { cat: "Rice", name: "Mutton Dum Biryani", price: 395, veg: false },
    { cat: "Rice", name: "Egg Biryani", price: 230, veg: false },
    { cat: "Rice", name: "Egg Dum Biryani", price: 235, veg: false },
    { cat: "Rice", name: "Prawns Biryani", price: 295, veg: false },

    { cat: "Rice", name: "Veg Fried Rice", price: 180, veg: true },
    { cat: "Rice", name: "Veg Hong Kong Rice", price: 190, veg: true },
    { cat: "Rice", name: "Veg Singapore Rice", price: 190, veg: true },
    { cat: "Rice", name: "Veg Schezwan Rice", price: 190, veg: true },
    { cat: "Rice", name: "Veg Triple Rice", price: 190, veg: true },
    { cat: "Rice", name: "Mushroom Fried Rice", price: 190, veg: true },
    { cat: "Rice", name: "Paneer Fried Rice", price: 200, veg: true },
    { cat: "Rice", name: "Chicken Fried Rice", price: 190, veg: false },
    { cat: "Rice", name: "Egg Fried Rice", price: 200, veg: false },
    { cat: "Rice", name: "Chicken Schezwan Rice", price: 210, veg: false },
    { cat: "Rice", name: "Chicken Triple Rice", price: 210, veg: false },
    { cat: "Rice", name: "Chicken Hong Kong Rice", price: 210, veg: false },
    { cat: "Rice", name: "Prawns Fried Rice", price: 220, veg: false },
    { cat: "Rice", name: "Prawns Schezwan Rice", price: 230, veg: false },

    { cat: "Noodles", name: "Veg Hakka Noodles", price: 180, veg: true },
    { cat: "Noodles", name: "Veg Schezwan Noodles", price: 190, veg: true },
    { cat: "Noodles", name: "Veg Singapore Noodles", price: 190, veg: true },
    { cat: "Noodles", name: "Veg Chilli Garlic Noodles", price: 190, veg: true },
    { cat: "Noodles", name: "Veg American Chopsuey", price: 230, veg: true },
    { cat: "Noodles", name: "Chicken Hakka Noodles", price: 190, veg: false },
    { cat: "Noodles", name: "Egg Hakka Noodles", price: 200, veg: false },
    { cat: "Noodles", name: "Chicken Singapore Noodles", price: 210, veg: false },
    { cat: "Noodles", name: "Chicken Schezwan Noodles", price: 210, veg: false },
    { cat: "Noodles", name: "Chicken American Chopsuey", price: 270, veg: false },
    { cat: "Noodles", name: "Prawns Hakka Noodles", price: 220, veg: false },

    { cat: "Chinese Gravy", name: "Veg Manchurian Gravy", price: 230, veg: true },
    { cat: "Chinese Gravy", name: "Paneer Chilli Gravy", price: 260, veg: true },
    { cat: "Chinese Gravy", name: "Mushroom Chilli Gravy", price: 260, veg: true },
    { cat: "Chinese Gravy", name: "Veg Ball Schezwan Gravy", price: 250, veg: true },
    { cat: "Chinese Gravy", name: "Chicken Manchurian Gravy", price: 270, veg: false },
    { cat: "Chinese Gravy", name: "Chicken Chilli Gravy", price: 270, veg: false },
    { cat: "Chinese Gravy", name: "Chicken Black Bean Gravy", price: 280, veg: false },
    { cat: "Chinese Gravy", name: "Chicken Schezwan Gravy", price: 270, veg: false },
    { cat: "Chinese Gravy", name: "Fish Oyster Sauce", price: 470, veg: false },
    { cat: "Chinese Gravy", name: "Prawns Oyster Sauce", price: 450, veg: false },

    { cat: "Thai", name: "Thai Red Curry Veg", price: 460, veg: true },
    { cat: "Thai", name: "Thai Green Curry Veg", price: 460, veg: true },
    { cat: "Thai", name: "Chicken Thai Curry", price: 530, veg: false },
    { cat: "Thai", name: "Thai Red Curry Prawns", price: 630, veg: false },
    { cat: "Thai", name: "Thai Green Curry Prawns", price: 630, veg: false },

    { cat: "Sizzlers", name: "Maxecorn Sizzler", price: 590, veg: true },
    { cat: "Sizzlers", name: "Black Bean Paneer Sizzler", price: 590, veg: true },
    { cat: "Sizzlers", name: "Malini Special Sizzler", price: 610, veg: true },
    { cat: "Sizzlers", name: "Tandoori Paneer Sizzler", price: 690, veg: true },
    { cat: "Sizzlers", name: "Mix Grilled Sizzler", price: 790, veg: false },
    { cat: "Sizzlers", name: "Grilled Chicken Sizzler", price: 750, veg: false },
    { cat: "Sizzlers", name: "Malini Non-Veg Special Sizzler", price: 830, veg: false },

    { cat: "Breads", name: "Butter Roti", price: 35, veg: true },
    { cat: "Breads", name: "Butter Paratha", price: 45, veg: true },
    { cat: "Breads", name: "Methi Paratha", price: 50, veg: true },
    { cat: "Breads", name: "Butter Naan", price: 60, veg: true },
    { cat: "Breads", name: "Butter Kulcha", price: 60, veg: true },
    { cat: "Breads", name: "Paneer Stuffed Kulcha", price: 85, veg: true },
    { cat: "Breads", name: "Butter Garlic Naan", price: 110, veg: true },
    { cat: "Breads", name: "Cheese Garlic Naan", price: 130, veg: true },
    { cat: "Breads", name: "Kashmiri Naan", price: 140, veg: true },
    { cat: "Breads", name: "Aloo Paratha", price: 90, veg: true },

    { cat: "Salad/Papad", name: "Plain Curd", price: 75, veg: true },
    { cat: "Salad/Papad", name: "Veg Raita", price: 85, veg: true },
    { cat: "Salad/Papad", name: "Green Salad", price: 170, veg: true },
    { cat: "Salad/Papad", name: "Masala Papad", price: 90, veg: true },
    { cat: "Beverages", name: "Butter Milk", price: 130, veg: true },
    { cat: "Beverages", name: "Mineral Water", price: 30, veg: true },
    { cat: "Beverages", name: "Soft Drink", price: 60, veg: true },
    { cat: "Beverages", name: "Fresh Lime Soda", price: 130, veg: true },
    { cat: "Beverages", name: "Virgin Mojito", price: 235, veg: true },
    { cat: "Beverages", name: "Strawberry Mojito", price: 235, veg: true },
    { cat: "Beverages", name: "Blue Lagoon", price: 230, veg: true },
    { cat: "Dessert", name: "Sizzling Brownie", price: 260, veg: true },
    { cat: "Dessert", name: "Banana Toffee", price: 230, veg: true }
];

const menuData = menuDataRaw.map(item => ({ ...item, image: getImg(item.cat, item.name) }));

const categoriesList = [...new Set(menuData.map(item => item.cat))];

let cart = [];
let savedAddress = {};
const RESTAURANT_PHONE = "919049534442";

window.onload = () => {
    renderCategories();
};

/* --- CATEGORY LOGIC --- */
function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = '';
    categoriesList.forEach(cat => {
        // Get first image from this cat as thumbnail
        const sampleItem = menuData.find(i => i.cat === cat);
        const img = sampleItem ? sampleItem.image : 'https://via.placeholder.com/150';

        const card = `
                <div class="cat-card" onclick="filterMenu('${cat}')">
                    <img src="${img}" class="cat-img" loading="lazy">
                    <div class="cat-title">${cat}</div>
                </div>
            `;
        grid.innerHTML += card;
    });
}

function showCategories() {
    document.getElementById('categorySection').style.display = 'block';
    document.getElementById('menuContainer').classList.remove('show');
    window.scrollTo(0, 0);
}

function filterMenu(category) {
    document.getElementById('categorySection').style.display = 'none';
    const container = document.getElementById('menuContainer');
    container.classList.add('show');

    document.getElementById('menuTitle').innerText = category === 'All' ? 'Full Menu' : category + ' Menu';

    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';

    const filtered = category === 'All' ? menuData : menuData.filter(i => i.cat === category);

    if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:50px; color:#888;">No items found.</div>';
        return;
    }
    filtered.forEach(renderItem);
    window.scrollTo(0, 0);
}

function handleSearch() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    if (term.length > 0) {
        // Switch to menu view automatically on search
        document.getElementById('categorySection').style.display = 'none';
        document.getElementById('menuContainer').classList.add('show');
        document.getElementById('menuTitle').innerText = 'Search Results';

        const grid = document.getElementById('menuGrid');
        grid.innerHTML = '';
        const filtered = menuData.filter(item => item.name.toLowerCase().includes(term) || item.cat.toLowerCase().includes(term));

        if (filtered.length === 0) {
            grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:50px; color:#888;">No matches found.</div>';
            return;
        }
        filtered.forEach(renderItem);
    } else {
        showCategories();
    }
}

function renderItem(item) {
    const grid = document.getElementById('menuGrid');
    const badgeClass = item.veg ? 'veg-badge' : 'nonveg-badge';
    const badgeText = item.veg ? 'VEG' : 'NON-VEG';
    const card = `
        <div class="menu-item">
          <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
          <div class="item-content">
            <div class="item-header"><span class="item-name">${item.name}</span><span class="${badgeClass}">${badgeText}</span></div>
            <div class="item-cat-label">${item.cat}</div>
            <div class="item-footer"><span class="item-price">₹${item.price}</span><button class="add-to-cart-btn" onclick="addToCart('${item.name}', ${item.price})">ADD +</button></div>
          </div>
        </div>`;
    grid.innerHTML += card;
}

/* --- CART LOGIC --- */
function addToCart(name, price) {
    const existing = cart.find(i => i.name === name);
    if (existing) existing.qty++; else cart.push({ name, price, qty: 1 });
    updateCartCount();
    showToast(`${name} added!`);
}

function updateCartCount() {
    const count = cart.reduce((sum, i) => sum + i.qty, 0);
    document.getElementById('cartCount').textContent = count;
}

function changeQty(index, change) {
    if (change === 1) cart[index].qty++;
    else { if (cart[index].qty > 1) cart[index].qty--; else cart.splice(index, 1); }
    updateCartCount(); openCart();
}

function openCart() {
    const list = document.getElementById('cartList');
    const totalEl = document.getElementById('cartTotal');
    if (cart.length === 0) {
        list.innerHTML = '<p style="text-align:center; color:#999; margin-top:20px;">Your cart is empty.</p>';
        totalEl.textContent = 'Total: ₹0';
    } else {
        let html = ''; let total = 0;
        cart.forEach((item, idx) => {
            total += item.price * item.qty;
            html += `<div class="cart-item-row"><div style="flex:1"><strong>${item.name}</strong><br><span style="font-size:12px; color:#666;">₹${item.price} each</span></div><div class="qty-controls"><button class="qty-btn" onclick="changeQty(${idx}, -1)">-</button><span class="qty-val">${item.qty}</span><button class="qty-btn" onclick="changeQty(${idx}, 1)">+</button></div><div style="margin-left:15px; width:70px; text-align:right;"><strong>₹${item.price * item.qty}</strong></div></div>`;
        });
        list.innerHTML = html;
        totalEl.textContent = 'Total: ₹' + total;
    }
    document.getElementById('cartModal').classList.add('show');
}

function closeModal(id) { document.getElementById(id).classList.remove('show'); }
function showToast(text) { const t = document.getElementById('toast'); t.innerText = text; t.className = "toast show"; setTimeout(() => t.className = t.className.replace("show", ""), 3000); }

/* --- FEATURES --- */
function openTableModal() { document.getElementById('tableModal').classList.add('show'); }
function sendBookingWhatsApp() {
    const name = document.getElementById('bookName').value, phone = document.getElementById('bookPhone').value, date = document.getElementById('bookDate').value, time = document.getElementById('bookTime').value, guests = document.getElementById('bookGuests').value;
    if (!name || !phone || !date || !time) { alert("Please fill all fields."); return; }
    window.open(`https://wa.me/${RESTAURANT_PHONE}?text=${encodeURIComponent(`*Table Booking* 🍽\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`)}`, '_blank');
    closeModal('tableModal');
}
function openTrackModal() { document.getElementById('trackModal').classList.add('show'); }
function sendTrackWhatsApp() {
    const token = document.getElementById('trackToken').value;
    if (!token) { alert("Enter Token"); return; }
    window.open(`https://wa.me/${RESTAURANT_PHONE}?text=${encodeURIComponent(`*Track Order* 🛵\nToken: ${token}`)}`, '_blank');
    closeModal('trackModal');
}

/* --- PAYMENT --- */
function proceedToAddress() { if (cart.length === 0) return; closeModal('cartModal'); document.getElementById('addressModal').classList.add('show'); }
function saveAddressAndProceed() {
    const flat = document.getElementById('flatNo').value, street = document.getElementById('street').value, city = document.getElementById('city').value, contact = document.getElementById('contact').value;
    if (!flat || !street || !city || !contact) { alert("Fill all address fields"); return; }
    savedAddress = { flat, street, city, contact };
    closeModal('addressModal'); document.getElementById('paymentModal').classList.add('show');
}

function handlePaymentSelection(mode) {
    closeModal('paymentModal');
    if (mode === 'COD') {
        sendWhatsAppOrder('Cash on Delivery', 'N/A', 'N/A');
    } else {
        const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

        // --- UPDATED QR LOGIC WITH SPECIFIC UPI ID ---
        // Using `pn` for payee name and `am` for amount
        const upiLink = `upi://pay?pa=8850606948@yapl&pn=MaliniRestaurant&am=${total}&cu=INR`;
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;

        document.getElementById('dynamicQrImg').src = qrUrl;
        document.getElementById('qrModal').classList.add('show');
    }
}

function openTransactionModal() { closeModal('qrModal'); document.getElementById('transactionModal').classList.add('show'); }
function finalizeOnlineOrder() {
    const transId = document.getElementById('transId').value;
    if (!transId) { alert("Enter Trans ID"); return; }
    const token = "ORD-" + Math.floor(1000 + Math.random() * 9000);
    closeModal('transactionModal'); sendWhatsAppOrder('Online Payment', transId, token);
}
function sendWhatsAppOrder(mode, transId, token) {
    let msg = `*New Order - Malini's Restaurant* 🍛\n\n`;
    let total = 0;
    cart.forEach(i => { msg += `▪ ${i.name} x${i.qty} - ₹${i.price * i.qty}\n`; total += i.price * i.qty; });
    msg += `\n*Total: ₹${total}*\n----------------\n*Details:*\n🏠 ${savedAddress.flat}, ${savedAddress.street}\n🏙 ${savedAddress.city}\n📞 ${savedAddress.contact}\n----------------\n*Payment:* ${mode}\n`;
    if (mode === 'Online Payment') msg += `🆔 Trans ID: ${transId}\n🎟 Token: ${token}\n`;
    window.open(`https://wa.me/${RESTAURANT_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    cart = []; updateCartCount();
}
