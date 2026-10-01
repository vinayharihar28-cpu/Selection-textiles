# Selection Textiles — Image Asset Directory

Drop your image files into these folders to use them across the website:

### Recommended Folder Structure:
- `public/images/products/` — Individual garments (Suits, Sherwanis, Modi Coats, Shirts, Trousers, Waistcoats, Kurta Pyjama, Polos, Sportswear, Corporate Uniforms)
- `public/images/collections/` — Collection lookbook cover cards
- `public/images/fabrics/` — Fabric swatches, weaves, and mill textile cards
- `public/images/corporate/` — Corporate sector & uniform fleet photos

---

### How to Reference Local Images:
When you drop an image into `public/images/products/sherwani-01.jpg`:
In your code, the path is simply:
```ts
'/images/products/sherwani-01.jpg'
```
*(No need to type `public`, Next.js serves files from `public/` at the root).*

---

### Where to Update in Code:
1. **Garment Products**: In `lib/data/products.ts`, update `heroImage.url`:
   ```ts
   heroImage: {
     id: 'img-sherwani-hero',
     url: '/images/products/sherwani-01.jpg',
     alt: 'Royal Sherwani',
   }
   ```
2. **Collection Cards**: In `lib/data/collections.ts`, update `imageUrl`:
   ```ts
   imageUrl: '/images/collections/sherwanis.jpg'
   ```
3. **The Atelier**: In `app/atelier/page.tsx`, update `image` in `GARMENTS`:
   ```ts
   image: '/images/products/sherwani-01.jpg'
   ```

---

### Using Cloud / S3 Bucket URLs:
You can also upload photos directly to your AWS S3 bucket (or any cloud URL) and paste the URL directly into `url`:
```ts
url: 'https://selection-textile-3d-models.s3.us-east-1.amazonaws.com/your-image.jpg'
```
*(AWS S3 domains are already enabled in `next.config.mjs`).*
