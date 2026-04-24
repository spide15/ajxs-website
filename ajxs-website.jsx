import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Phone, Mail, MessageCircle, Star, Clock, ChevronDown, ChevronUp, Menu, X, Youtube, Instagram } from 'lucide-react';



// ESM Image Imports - Logo
import logoImage from './img/logo.png';

// ESM Image Imports - Offer Category
import LH_Offer_2 from './img/offer/LH_Offer_2.jpeg';
import LH_Offer_1 from './img/offer/LH_Offer_1.jpeg';
import en_offer_1 from './img/offer/en_offer_1.jpeg';
import card_offer_1 from './img/offer/card_offer_1.jpeg';
import card_0ffer2 from './img/offer/card_0ffer2.jpeg';
import A5_offer from './img/offer/A5_offer.jpeg';
import St_offer from './img/offer/St_offer.jpeg';
import PL_offer_1 from './img/offer/PL_offer_1.jpeg';
import MG_Offer_3 from './img/offer/MG_Offer_3.jpeg';
import MG_Offer_2 from './img/offer/MG_Offer_2.jpeg';
import MG_Offer_1 from './img/offer/MG_Offer_1.jpeg';
import flex_offer from './img/offer/flex_offer.jpeg';
import BB_offer_1 from './img/offer/BB_offer_1.jpeg';

// ESM Image Imports - Gift Category
import mugImage from './img/gift/mug.jpg';
import walletImage from './img/gift/Wallet.png';
import pillarImage from './img/gift/pillow.png';
import tshirtImage from './img/gift/tshirt.png';
import keychainImage from './img/gift/keychain.png';
import bottleImage from './img/gift/bottle.png';
import ringImage from './img/gift/ring.png';
import frameImage from './img/gift/frame.png';
import nameplateImage from './img/gift/nameplate.png';
import braceletWomenImage from './img/gift/Bracelet_Women.png';
import braceletMenImage from './img/gift/Bracelet_men.png';
import penImage from './img/gift/pen.png';
import coverImage from './img/gift/cover.png';
import clockImage from './img/gift/clock.png';
import passportImage from './img/gift/passport.png';
import penstandImage from './img/gift/penstand.png';
import cardholderImage from './img/gift/cardholder.png';
import standImage from './img/gift/stand.png';
import glassImage from './img/gift/glass.png';
import diaryImage from './img/gift/diary.png';
import tagImage from './img/gift/tag.png';
import bedsheetImage from './img/gift/bedsheet.png';

// ESM Image Imports - Print Category
import flexImage from './img/print/flex.jpg';
import blackbookImage from './img/print/blackbook.png';
import visitingImage from './img/print/visiting.png';
import pvcImage from './img/print/pvc.png';
import stampImage from './img/print/stamp.png';
import laceImage from './img/print/lace.png';
import offsetImage from './img/print/offset.png';
import billbookImage from './img/print/billbook.png';
import letterheadImage from './img/print/letterhead.png';
import pamphletImage from './img/print/pamphlet.png';
import vinylImage from './img/print/vinyl.png';
import weddingImage from './img/print/wedding.png';
import certificateImage from './img/print/certificate.png';
import invitationImage from './img/print/invitation.png';
import calenderImage from './img/print/calender.png';
import standeeImage from './img/print/standee.png';
import bannerImage from './img/print/banner.png';

// ESM Image Imports - Stationery Category
import officeStationeryImage from './img/stationery/Office_Stationery.png';
import schoolStationeryImage from './img/stationery/school_stationery.png';

// ESM Image Imports - Xerox Category
import photocopyImage from './img/xerox/photocopy.png';
import laminationImage from './img/xerox/Lamination.png';
import autocadImage from './img/xerox/autocad.png';
import spiralImage from './img/xerox/Spiral.png';
import dtpImage from './img/xerox/dtp.png';

// ESM Image Imports - Combo Category
import combo2Image from './img/Combo/combo2.png';
import combo3Image from './img/Combo/combo3.png';
import combo4Image from './img/Combo/combo4.png';



// Product Data
const PRODUCTS = [
  { "id": "1", "name": "Mug Printing", "category": "GIFT", "image": mugImage },
  { "id": "2", "name": "Customized Wallet", "category": "GIFT", "image": walletImage },
  { "id": "3", "name": "Office Stationery", "category": "STATIONERY", "image": officeStationeryImage },
  { "id": "4", "name": "COMBO OFFER(2 in 1)", "category": "COMBO", "image": combo2Image },
  { "id": "5", "name": "PhotoCopy", "category": "XEROX", "image": photocopyImage },
  { "id": "6", "name": "Customized Pillow", "category": "GIFT", "image": pillarImage },
  { "id": "7", "name": "Flex Printing", "category": "PRINT", "image": flexImage },
  { "id": "8", "name": "School Stationery", "category": "STATIONERY", "image": schoolStationeryImage },
  { "id": "9", "name": "COMBO OFFER(3 in 1)", "category": "COMBO", "image": combo3Image },
  { "id": "10", "name": "Lamination", "category": "XEROX", "image": laminationImage },
  { "id": "11", "name": "Customized T-Shirt", "category": "GIFT", "image": tshirtImage },
  { "id": "12", "name": "Black Book", "category": "PRINT", "image": blackbookImage },
  { "id": "13", "name": "Autocad Plotting", "category": "XEROX", "image": autocadImage },
  { "id": "14", "name": "Customized KeyChain", "category": "GIFT", "image": keychainImage },
  { "id": "15", "name": "Visiting Card", "category": "PRINT", "image": visitingImage },
  { "id": "16", "name": "COMBO OFFER(4 in 1)", "category": "COMBO", "image": combo4Image },
  { "id": "17", "name": "Spiral binding", "category": "XEROX", "image": spiralImage },
  { "id": "18", "name": "Customized Cover", "category": "GIFT", "image": coverImage },
  { "id": "19", "name": "Smart(PVC) Card", "category": "PRINT", "image": pvcImage },
  { "id": "20", "name": "DTP Service", "category": "XEROX", "image": dtpImage },
  { "id": "21", "name": "Customized bottle", "category": "GIFT", "image": bottleImage },
  { "id": "22", "name": "Lace Printing", "category": "PRINT", "image": laceImage },
  { "id": "23", "name": "Customized Ring", "category": "GIFT", "image": ringImage },
  { "id": "24", "name": "Rubber Stamp", "category": "PRINT", "image": stampImage },
  { "id": "25", "name": "Customized Frame", "category": "GIFT", "image": frameImage },
  { "id": "26", "name": "Offset Printing", "category": "PRINT", "image": offsetImage },
  { "id": "27", "name": "Customized Name Plate", "category": "GIFT", "image": nameplateImage },
  { "id": "28", "name": "Bill Book Printing", "category": "PRINT", "image": billbookImage },
  { "id": "29", "name": "Customized Bracelet Women", "category": "GIFT", "image": braceletWomenImage },
  { "id": "30", "name": "Letter Head Printing", "category": "PRINT", "image": letterheadImage },
  { "id": "31", "name": "Customized Bracelet Men", "category": "GIFT", "image": braceletMenImage },
  { "id": "32", "name": "Pamphlet Printing", "category": "PRINT", "image": pamphletImage },
  { "id": "33", "name": "Customized Pen", "category": "GIFT", "image": penImage },
  { "id": "34", "name": "Vinyl Printing", "category": "PRINT", "image": vinylImage },
  { "id": "35", "name": "Customized Engraved", "category": "GIFT", "image": frameImage },
  { "id": "36", "name": "Wedding Card Printing", "category": "PRINT", "image": weddingImage },
  { "id": "37", "name": "Certificate Printing", "category": "PRINT", "image": certificateImage },
  { "id": "38", "name": "Invitation Card Printing", "category": "PRINT", "image": invitationImage },
  { "id": "39", "name": "Calendar Printing", "category": "PRINT", "image": calenderImage },
  { "id": "40", "name": "Customized Clock", "category": "GIFT", "image": clockImage },
  { "id": "41", "name": "Customized Passport Cover", "category": "GIFT", "image": passportImage },
  { "id": "42", "name": "Customized Pen Stand", "category": "GIFT", "image": penstandImage },
  { "id": "43", "name": "Visiting Card Holder", "category": "GIFT", "image": cardholderImage },
  { "id": "44", "name": "Customized Mobile Stand", "category": "GIFT", "image": standImage },
  { "id": "45", "name": "Customized Wine Glass", "category": "GIFT", "image": glassImage },
  { "id": "46", "name": "Customized Diary", "category": "GIFT", "image": diaryImage },
  { "id": "47", "name": "Customized Bag Tag", "category": "GIFT", "image": tagImage },
  { "id": "48", "name": "Customized Bedsheet", "category": "GIFT", "image": bedsheetImage },
  { "id": "49", "name": "Standees", "category": "PRINT", "image": standeeImage },
  { "id": "50", "name": "Banner", "category": "PRINT", "image": bannerImage },
];

// Spotlight Offers
const getEndDate = (daysAhead = 2) => {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);
  return date.toISOString().split('T')[0];
};

const SPOTLIGHT_OFFERS = [
  {
    id: 1,
    title: "Letterhead Printing (1000 Qty)",
    description: "High-quality letterhead printing for 1000 quantity to boost your professional branding.",
    originalPrice: "₹2000",
    discountedPrice: "₹1700",
    discount: "15%",
    endDate: getEndDate(2),
    image: LH_Offer_2,
  },
  {
    id: 2,
    title: "Letterhead Printing Special (5000 Qty)",
    description: "5000 QTY Letter Heads at an unbeatable price - perfect for businesses looking to make a lasting impression (100 GSM Alabaster Paper).",
    originalPrice: "₹8000",
    discountedPrice: "₹6000",
    discount: "25%",
    endDate: getEndDate(3),
    image: LH_Offer_1,
  },
  {
    id: 3,
    title: "Envelope Printing Special",
    description: "Single side printed envelopes, 1000 quantity, for all your official correspondence needs.",
    originalPrice: "₹3125",
    discountedPrice: "₹2500",
    discount: "20%",
    endDate: getEndDate(1),
    image: en_offer_1,
  },
  {
    id: 4,
    title: "Single Sided Visiting Cards",
    description: "1000 Qty single side visiting cards to network effectively and leave a mark.",
    originalPrice: "₹1250",
    discountedPrice: "₹1000",
    discount: "20%",
    endDate: getEndDate(2),
    image: card_offer_1,
  },
  {
    id: 5,
    title: "Double Sided Visiting Cards",
    description: "1000 Qty front and back premium visiting cards for comprehensive business details.",
    originalPrice: "₹1375",
    discountedPrice: "₹1100",
    discount: "20%",
    endDate: getEndDate(4),
    image: card_0ffer2,
  },
  {
    id: 6,
    title: "A5 Flyer Printing (10,000 Qty)",
    description: "Front & back multicolor A5 size flyers on glossy paper to maximize your marketing reach.",
    originalPrice: "₹8125",
    discountedPrice: "₹6500",
    discount: "20%",
    endDate: getEndDate(5),
    image: A5_offer,
  },
  {
    id: 7,
    title: "Premium Standee Printing",
    description: "High-quality, eye-catching standee printing for events, promotions, and shop displays.",
    originalPrice: "₹2000",
    discountedPrice: "₹1500",
    discount: "25%",
    endDate: getEndDate(2),
    image: St_offer,
  },
  {
    id: 8,
    title: "Personalized Pillow Printing",
    description: "Custom printed pillows perfect for personalized gifting or home decor.",
    originalPrice: "₹750",
    discountedPrice: "₹600",
    discount: "20%",
    endDate: getEndDate(3),
    image: PL_offer_1,
  },
  {
    id: 9,
    title: "Magic Mug Printing (1+1 Offer)",
    description: "Buy one get one free on custom magic mug printing - reveal your memories with hot beverages.",
    originalPrice: "₹625",
    discountedPrice: "₹500",
    discount: "20%",
    endDate: getEndDate(1),
    image: MG_Offer_3,
  },
  {
    id: 10,
    title: "White Mug Printing (1+1 Offer)",
    description: "Incredible 1+1 deal on custom printed white mugs for your loved ones.",
    originalPrice: "₹400",
    discountedPrice: "₹300",
    discount: "25%",
    endDate: getEndDate(2),
    image: MG_Offer_2,
  },
  {
    id: 11,
    title: "White Mug Printing (1 PCS)",
    description: "Personalize your coffee time with a custom printed white mug for just one piece.",
    originalPrice: "₹225",
    discountedPrice: "₹180",
    discount: "20%",
    endDate: getEndDate(2),
    image: MG_Offer_1,
  },
  {
    id: 12,
    title: "Premium Canvas Printing",
    description: "High-quality Canvas printing at unbeatable per sq.ft. rates. We also offer Sada Flex (₹13), Sunboard (₹75), and Vinyl (₹40).",
    originalPrice: "₹200",
    discountedPrice: "₹150",
    discount: "25%",
    endDate: getEndDate(5),
    image: flex_offer,
  },
  {
    id: 13,
    title: "Bill Book Printing A5 (1+1)",
    description: "Quantity 10 Single Color A5 Size Bill Books. Perfect for keeping your business transactions organized.",
    originalPrice: "₹2000",
    discountedPrice: "₹1500",
    discount: "25%",
    endDate: getEndDate(3),
    image: BB_offer_1,
  }
];

// Countdown Timer Component
const CountdownTimer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTime = () => {
      const end = new Date(endDate).getTime();
      const now = new Date().getTime();
      const difference = end - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      } else {
        setTimeLeft('Expired');
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 60000);
    return () => clearInterval(timer);
  }, [endDate]);

  return <span className="text-sm font-semibold text-red-600">{timeLeft}</span>;
};

// 3D Tilt Card Component
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  );
};

// Typed Heading (static for fast LCP)
const TypedHeading = () => {
  const fullText = "Mumbai's Destination for Printing & Gifting Magic";
  return <h1 className="text-4xl md:text-6xl font-bold text-white">{fullText}</h1>;
};

// Product Card
const ProductCard = ({ product }) => {
  const categoryColors = {
    GIFT: 'bg-pink-100 text-pink-800',
    STATIONERY: 'bg-blue-100 text-blue-800',
    XEROX: 'bg-green-100 text-green-800',
    PRINT: 'bg-purple-100 text-purple-800',
    COMBO: 'bg-amber-100 text-amber-800',
  };

  const getImage = (name) => {
    const keywords = name.toLowerCase().replace(/\s+/g, ',');
    return `https://source.unsplash.com/featured/?${keywords}`;
  };

  const handleWhatsApp = () => {
    const message = `Hi AJXS, I'm interested in the ${product.name} I saw on your website.`;
    const whatsappUrl = `https://wa.me/917738405495?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <TiltCard>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
      >
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <img
            src={product.image || getImage(product.name)}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[product.category] || 'bg-gray-100'}`}>
            {product.category}
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4">Premium quality customization at affordable prices</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle size={18} />
            Inquire on WhatsApp
          </motion.button>
        </div>
      </motion.div>
    </TiltCard>
  );
};

// Spotlight Offer Card
const SpotlightCard = ({ offer }) => {
  return (
    <TiltCard>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all border-2 border-red-500"
      >
        {/* Limited Time Banner */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 px-4 text-center font-bold text-sm">
          🔥 LIMITED TIME OFFER 🔥
        </div>

        <div className="relative w-full aspect-square overflow-hidden bg-gray-200 mt-10">
          <img
            src={offer.image}
            alt={offer.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute bottom-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full font-bold">
            {offer.discount} OFF
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{offer.description}</p>

          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-gray-500 line-through text-sm">{offer.originalPrice}</p>
              <p className="text-2xl font-bold text-red-600">{offer.discountedPrice}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Ends in</p>
              <CountdownTimer endDate={offer.endDate} />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const message = `Hi AJXS, I'm interested in: ${offer.title}. Can you provide more details?`;
              window.open(`https://wa.me/917738405495?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
          >
            <MessageCircle size={20} />
            Grab This Deal Now!
          </motion.button>
        </div>
      </motion.div>
    </TiltCard>
  );
};

// Main App Component
export default function AJXSWebsite() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const servicesRef = useRef(null);

  const categories = ['ALL', 'GIFT', 'STATIONERY', 'XEROX', 'PRINT', 'COMBO'];

  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredOffers = SPOTLIGHT_OFFERS.filter((offer) => {
    const search = searchTerm.toLowerCase();
    return (
      offer.title.toLowerCase().includes(search) ||
      offer.description.toLowerCase().includes(search)
    );
  });

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'ALL' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen font-sans">
      {/* Header/Navigation */}
      <motion.header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="logo-rotate flex items-center justify-center">
              <img src={logoImage} className="w-10 h-10 sm:w-16 sm:h-16 object-contain rounded-full logo-scale" alt="AJXS Logo" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">AJXS</h1>
              <p className="text-xs text-gray-600">Printing & Gifting</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            {['Home', 'Services', 'Offers', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-red-600 font-semibold transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Contact Button */}
          <motion.a
            href="tel:+919320999385"
            whileHover={{ scale: 1.05 }}
            className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            📞 Call Now
          </motion.a>
        </div>

        {/* Header Search */}
        <div className="border-t border-gray-200 bg-white px-4 py-4">
          <div className="relative w-full max-w-2xl mx-auto">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products &  offers ..."
              value={searchTerm}
              onChange={(e) => handleSearchTermChange(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-full focus:border-red-600 outline-none transition-colors"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-4 top-3.5 text-gray-500 hover:text-gray-900"
                aria-label="Clear search"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-50 border-t flex flex-col"
            >
              {['Home', 'Services', 'Offers', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 border-b"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-gradient-to-br from-slate-900 via-red-900 to-orange-800 text-white flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-white opacity-10 blur-3xl"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-orange-300 opacity-5 blur-3xl"
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-6">
            <p className="text-xl md:text-2xl font-light mb-4">Welcome to</p>
            <div className="inline-block px-6 py-2 bg-white bg-opacity-10 backdrop-blur rounded-full border border-white border-opacity-20 mb-6">
              <span className="text-3xl md:text-4xl font-bold">Avani Jumbo Xerox & Stationery</span>
            </div>
          </div>

          <div className="mb-8">
            <TypedHeading />
          </div>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            📍 Your one-stop solution for premium printing, customization, and stationery services
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#offers"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              🎁 See Current Offers
            </a>
            <a
              href="#services"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              🛍️ Explore Services
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-white opacity-50" />
        </motion.div>
      </section>

      {/* Spotlight Offers Section */}
      <section id="offers" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              🔥 Spotlight Offers
            </h2>
            <p className="text-gray-600 text-lg">Limited time deals you won't want to miss</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPOTLIGHT_OFFERS.map((offer) => (
              <SpotlightCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      {/* Services/Products Section */}
      <section id="services" ref={servicesRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Complete Service Catalog
            </h2>
            <p className="text-gray-600 text-lg">48+ Products & Services to Choose From</p>
            {searchTerm && (
              <p className="text-red-600 text-base mt-4">
                Showing results for "{searchTerm}"
              </p>
            )}
          </motion.div>

          {searchTerm && (
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm uppercase font-semibold tracking-[0.3em] text-red-600">Search Results</p>
                  <h3 className="text-2xl font-bold text-gray-800">Best offer matches first</h3>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <ChevronUp size={18} />
                  <span className="font-semibold">Offers above</span>
                  <ChevronDown size={18} />
                  <span className="font-semibold">Products below</span>
                </div>
              </div>

              {filteredOffers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredOffers.map((offer) => (
                    <SpotlightCard key={offer.id} offer={offer} />
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-red-300 bg-red-50 p-8 text-center">
                  <p className="text-red-700 font-semibold">No matching offers found for "{searchTerm}".</p>
                </div>
              )}

              <div className="mt-10 flex items-center justify-center gap-3 text-gray-600">
                <ChevronDown size={20} />
                <span className="font-semibold">Now see matched products</span>
                <ChevronDown size={20} />
              </div>
            </div>
          )}

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-semibold transition-all ${selectedCategory === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-300 text-lg">We're here to help with all your printing & customization needs across Mumbai</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex gap-4 items-start">
                <div className="bg-cyan-600 p-3 rounded-lg flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-300">

                    No.4, Mhatre Royale <br /> Lt Rd, opp. Canara Bank <br /> Dahisar West, Mumbai <br /> Maharashtra 400068
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <a href="tel:+919320999385" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +91 93209 99385
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:avanixerox999@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    avanixerox999@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-green-500 p-3 rounded-lg flex-shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                  <a href="https://wa.me/917738405495" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Chat with us instantly
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6594146019343!2d72.8584686!3d19.2536696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e482e6c5fb%3A0xf05f1fcfd1f9d533!2sAvani%20Jumbo%20Xerox!5e0!3m2!1sen!2sin!4v1775835132763!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          {/* Hours & Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-700 p-6 rounded-lg">
              <Clock size={32} className="mx-auto mb-3" />
              <h4 className="font-bold mb-2">Business Hours</h4>
              <p className="text-gray-300 text-sm">Mon - Sat: 9:30 AM - 9.30 PM<br />Sunday: 10:00 AM - 3:00 PM</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <MessageCircle size={32} className="mx-auto mb-3" />
              <h4 className="font-bold mb-2">Quick Response</h4>
              <p className="text-gray-300 text-sm">WhatsApp & Phone<br />Respond within 1 hour</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <Star size={32} className="mx-auto mb-3" />
              <h4 className="font-bold mb-2">Quality Guarantee</h4>
              <p className="text-gray-300 text-sm">100% Satisfaction<br />or Money Back</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              {/* <img src="/img/Footer.png" alt="AJXS Logo" className="h-10 w-10 mb-3" /> */}
              {/* <h3 className="font-bold text-white mb-2">AJXS</h3> */}
              <p className="text-sm">AJXS is an experienced printing company that can fulfill a number of printing requirements, providing exceptional design solutions for online and offline advertising content.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Printing</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Customization</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Gifting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://youtube.com/@avaniprints?si=GDxZ2S0czcpPkPqo" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="https://www.instagram.com/avanijumboxerox" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm mb-2">© 2021 Avani Jumbo Xerox & Stationery. All rights reserved.</p>
            <p className="text-center text-xs text-gray-500">Serving Mumbai, Maharashtra with premium printing and customization services.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/917738405495"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
}
