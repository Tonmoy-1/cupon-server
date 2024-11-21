## **Discount PRO: A Coupon Collecting Application**

### **Purpose**

Discount PRO is a user-friendly application designed to help shoppers in Bangladesh find and use discount coupons for various e-commerce stores. It consolidates coupons from multiple brands, enabling users to save time and money by accessing all the latest deals in one place.

### **Live URL**

[**Visit Discount PRO**]

### **Key Features**

1. **User Authentication:**
   - Login and registration using email or Google (via Firebase Authentication).
   - Persistent login across sessions.
2. **Home Page:**
   - Dynamic banner slider.
   - Animated brand logos (using **React Fast Marquee**) with clickable navigation to brand details.
   - Highlight of brands on sale with card designs.
3. **Coupon Page (`/brand/:id`):**
   - Private route accessible to logged-in users only.
   - Displays brand details (name, logo, rating) and available coupons in a grid format.
   - Features:
     - "Copy Code" button with **react-copy-to-clipboard** and success toast notification.
     - "Use Now" button to open the brand’s shop link in a new tab.
4. **My Profile Page (`/my-profile`):**
   - Displays user details (photo, name, email).
   - Allows updates to profile photo and name via an edit page.
5. **Additional Features:**
   - **Forget Password:** Reset password functionality with a redirect to Gmail.
   - **Password Validation:** Enforces strong passwords with uppercase, lowercase, and a minimum of 6 characters.
   - **Password Toggling:** Show/hide password option in the registration form.
   - **404 Error Page:** Custom page with a "Go Home" button for invalid routes.
   - **Responsive Design:** Fully responsive across mobile, tablet, and desktop.
   - **Animations:** Enhanced UI/UX using **Animate.css** animations.

---

### **Technologies & Tools Used**

- **Frontend:**
  - React.js
  - Tailwind CSS
  - React Router DOM
- **Authentication:**
  - Firebase Authentication
- **Data Management:**
  - JSON for static data.
- **Animation:**
  - Animate.css
  - React Fast Marquee
- **Utilities:**
  - React Icons
  - React Copy-to-Clipboard
  - React Toastify (for notifications)

### **NPM Packages**

- `react-router-dom`: For routing and navigation.
- `firebase`: For authentication and backend services.
- `react-icons`: For beautiful icons in the UI.
- `react-fast-marquee`: For animated scrolling of brand logos.
- `react-copy-to-clipboard`: To copy coupon codes easily.
- `react-toastify`: For toast notifications.
- `aos`: For scroll-based animations.

---

### **Future Enhancements**

- Email verification for added security.
- Advanced coupon filtering by category or discount range.
- Integration with more e-commerce brands for wider coverage.

---

Designed and developed by **Md Tonmoy Hosen**.
