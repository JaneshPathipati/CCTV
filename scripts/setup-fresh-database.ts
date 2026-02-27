/**
 * Fresh Database Setup Script
 * Populates a new Supabase database with all HSO CCTV products
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ Error: Missing Supabase credentials');
  console.error('Make sure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// All 73 products data
const products = [
  // IP Cameras - Dome (2MP)
  { id: 'HSO-IP2D030', name: '2MP IP Dome Camera', model_number: 'ST-VD IP2030', category: 'IP Camera', camera_type: 'Dome', resolution: '2MP', audio: 'None', connectivity: 'IP', description: 'High-quality 2MP IP dome camera for indoor surveillance', status: 'active', image: 'ST-VD IP2030.png', stock_quantity: 15, lens: '3.6mm', special_features: ['Night Vision', 'Weatherproof'] },
  { id: 'HSO-IP2D028', name: '2MP IP Dome Camera', model_number: 'ST-VD IP2028', category: 'IP Camera', camera_type: 'Dome', resolution: '2MP', audio: 'None', connectivity: 'IP', description: '2MP IP dome camera with enhanced features', status: 'active', image: 'ST-VD IP2028.png', stock_quantity: 12, lens: '2.8mm', special_features: ['Night Vision', 'Wide Angle'] },
  
  // IP Cameras - Dome (3MP)
  { id: 'HSO-IP3D030', name: '3MP IP Dome Camera', model_number: 'ST-VD IP3030', category: 'IP Camera', camera_type: 'Dome', resolution: '3MP', audio: 'None', connectivity: 'IP', description: 'Professional 3MP IP dome camera', status: 'active', image: 'ST-VD IP3030.png', stock_quantity: 10, lens: '3.6mm', special_features: ['Night Vision', 'Motion Detection'] },
  { id: 'HSO-IP3D028', name: '3MP IP Dome Camera', model_number: 'ST-VD IP3028', category: 'IP Camera', camera_type: 'Dome', resolution: '3MP', audio: 'None', connectivity: 'IP', description: '3MP IP dome with wide angle lens', status: 'active', image: 'ST-VD IP3028.png', stock_quantity: 8, lens: '2.8mm', special_features: ['Night Vision', 'Wide Angle'] },
  
  // IP Cameras - Dome (4MP)
  { id: 'HSO-IP4D030', name: '4MP IP Dome Camera', model_number: 'ST-VD IP4030', category: 'IP Camera', camera_type: 'Dome', resolution: '4MP', audio: 'None', connectivity: 'IP', description: 'High-resolution 4MP IP dome camera', status: 'active', image: 'ST-VD IP4030.png', stock_quantity: 20, lens: '3.6mm', special_features: ['Night Vision', 'Smart IR'] },
  { id: 'HSO-IP4D028', name: '4MP IP Dome Camera', model_number: 'ST-VD IP4028', category: 'IP Camera', camera_type: 'Dome', resolution: '4MP', audio: 'None', connectivity: 'IP', description: '4MP IP dome with advanced features', status: 'active', image: 'ST-VD IP4028.png', stock_quantity: 18, lens: '2.8mm', special_features: ['Night Vision', 'WDR'] },
  
  // IP Cameras - Dome (5MP)
  { id: 'HSO-IP5D030', name: '5MP IP Dome Camera', model_number: 'ST-VD IP5030', category: 'IP Camera', camera_type: 'Dome', resolution: '5MP', audio: 'None', connectivity: 'IP', description: 'Premium 5MP IP dome camera', status: 'active', image: 'ST-VD IP5030.png', stock_quantity: 15, lens: '3.6mm', special_features: ['Night Vision', 'H.265+'] },
  { id: 'HSO-IP5D028', name: '5MP IP Dome Camera', model_number: 'ST-VD IP5028', category: 'IP Camera', camera_type: 'Dome', resolution: '5MP', audio: 'None', connectivity: 'IP', description: '5MP IP dome with superior image quality', status: 'active', image: 'ST-VD IP5028.png', stock_quantity: 12, lens: '2.8mm', special_features: ['Night Vision', 'Smart Analytics'] },
  
  // IP Cameras - Bullet (2MP)
  { id: 'HSO-IP2B030', name: '2MP IP Bullet Camera', model_number: 'ST-VB IP2030', category: 'IP Camera', camera_type: 'Bullet', resolution: '2MP', audio: 'None', connectivity: 'IP', description: 'Outdoor 2MP IP bullet camera', status: 'active', image: 'ST-VB IP2030.png', stock_quantity: 25, lens: '3.6mm', special_features: ['Weatherproof', 'Night Vision'] },
  { id: 'HSO-IP2B028', name: '2MP IP Bullet Camera', model_number: 'ST-VB IP2028', category: 'IP Camera', camera_type: 'Bullet', resolution: '2MP', audio: 'None', connectivity: 'IP', description: '2MP IP bullet with wide coverage', status: 'active', image: 'ST-VB IP2028.png', stock_quantity: 20, lens: '2.8mm', special_features: ['Weatherproof', 'IR LEDs'] },
  
  // IP Cameras - Bullet (3MP)
  { id: 'HSO-IP3B030', name: '3MP IP Bullet Camera', model_number: 'ST-VB IP3030', category: 'IP Camera', camera_type: 'Bullet', resolution: '3MP', audio: 'None', connectivity: 'IP', description: 'Professional 3MP IP bullet camera', status: 'active', image: 'ST-VB IP3030.png', stock_quantity: 18, lens: '3.6mm', special_features: ['Weatherproof', 'Smart IR'] },
  { id: 'HSO-IP3B028', name: '3MP IP Bullet Camera', model_number: 'ST-VB IP3028', category: 'IP Camera', camera_type: 'Bullet', resolution: '3MP', audio: 'None', connectivity: 'IP', description: '3MP IP bullet with enhanced night vision', status: 'active', image: 'ST-VB IP3028.png', stock_quantity: 15, lens: '2.8mm', special_features: ['Weatherproof', 'Night Vision'] },
  
  // IP Cameras - Bullet (4MP)
  { id: 'HSO-IP4B030', name: '4MP IP Bullet Camera', model_number: 'ST-VB IP4030', category: 'IP Camera', camera_type: 'Bullet', resolution: '4MP', audio: 'None', connectivity: 'IP', description: 'High-resolution 4MP IP bullet', status: 'active', image: 'ST-VB IP4030.png', stock_quantity: 22, lens: '3.6mm', special_features: ['Weatherproof', 'WDR'] },
  { id: 'HSO-IP4B028', name: '4MP IP Bullet Camera', model_number: 'ST-VB IP4028', category: 'IP Camera', camera_type: 'Bullet', resolution: '4MP', audio: 'None', connectivity: 'IP', description: '4MP IP bullet with smart features', status: 'active', image: 'ST-VB IP4028.png', stock_quantity: 20, lens: '2.8mm', special_features: ['Weatherproof', 'Motion Detection'] },
  
  // IP Cameras - Bullet (5MP)
  { id: 'HSO-IP5B030', name: '5MP IP Bullet Camera', model_number: 'ST-VB IP5030', category: 'IP Camera', camera_type: 'Bullet', resolution: '5MP', audio: 'None', connectivity: 'IP', description: 'Premium 5MP IP bullet camera', status: 'active', image: 'ST-VB IP5030.png', stock_quantity: 16, lens: '3.6mm', special_features: ['Weatherproof', 'H.265+'] },
  { id: 'HSO-IP5B028', name: '5MP IP Bullet Camera', model_number: 'ST-VB IP5028', category: 'IP Camera', camera_type: 'Bullet', resolution: '5MP', audio: 'None', connectivity: 'IP', description: '5MP IP bullet with superior quality', status: 'active', image: 'ST-VB IP5028.png', stock_quantity: 14, lens: '2.8mm', special_features: ['Weatherproof', 'Smart Analytics'] },
  
  // IP Cameras - Bullet (8MP)
  { id: 'HSO-IP8B030', name: '8MP IP Bullet Camera', model_number: 'ST-VB IP8030', category: 'IP Camera', camera_type: 'Bullet', resolution: '8MP', audio: 'None', connectivity: 'IP', description: 'Ultra HD 8MP IP bullet camera', status: 'active', image: 'ST-VB IP8030.png', stock_quantity: 10, lens: '3.6mm', special_features: ['4K Resolution', 'Weatherproof'] },
  { id: 'HSO-IP8B028', name: '8MP IP Bullet Camera', model_number: 'ST-VB IP8028', category: 'IP Camera', camera_type: 'Bullet', resolution: '8MP', audio: 'None', connectivity: 'IP', description: '8MP IP bullet with 4K quality', status: 'active', image: 'ST-VB IP8028.png', stock_quantity: 8, lens: '2.8mm', special_features: ['4K Resolution', 'Night Vision'] },
  
  // HD Cameras - Dome (2MP)
  { id: 'HSO-HD2D030', name: '2MP HD Dome Camera', model_number: 'ST-VD HD2030', category: 'HD Camera', camera_type: 'Dome', resolution: '2MP', audio: 'None', connectivity: 'Analog', description: 'Analog HD 2MP dome camera', status: 'active', image: 'ST-VD HD2030.png', stock_quantity: 30, lens: '3.6mm', special_features: ['Night Vision', 'Vandal Proof'] },
  { id: 'HSO-HD2D028', name: '2MP HD Dome Camera', model_number: 'ST-VD HD2028', category: 'HD Camera', camera_type: 'Dome', resolution: '2MP', audio: 'None', connectivity: 'Analog', description: '2MP HD dome with wide angle', status: 'active', image: 'ST-VD HD2028.png', stock_quantity: 28, lens: '2.8mm', special_features: ['Night Vision', 'Wide Angle'] },
  
  // HD Cameras - Dome (3MP)
  { id: 'HSO-HD3D030', name: '3MP HD Dome Camera', model_number: 'ST-VD HD3030', category: 'HD Camera', camera_type: 'Dome', resolution: '3MP', audio: 'None', connectivity: 'Analog', description: 'High-definition 3MP dome camera', status: 'active', image: 'ST-VD HD3030.png', stock_quantity: 25, lens: '3.6mm', special_features: ['Night Vision', 'OSD Menu'] },
  { id: 'HSO-HD3D028', name: '3MP HD Dome Camera', model_number: 'ST-VD HD3028', category: 'HD Camera', camera_type: 'Dome', resolution: '3MP', audio: 'None', connectivity: 'Analog', description: '3MP HD dome with enhanced features', status: 'active', image: 'ST-VD HD3028.png', stock_quantity: 22, lens: '2.8mm', special_features: ['Night Vision', 'DNR'] },
  
  // HD Cameras - Dome (5MP)
  { id: 'HSO-HD5D030', name: '5MP HD Dome Camera', model_number: 'ST-VD HD5030', category: 'HD Camera', camera_type: 'Dome', resolution: '5MP', audio: 'None', connectivity: 'Analog', description: 'Premium 5MP HD dome camera', status: 'active', image: 'ST-VD HD5030.png', stock_quantity: 20, lens: '3.6mm', special_features: ['Night Vision', 'UTC Control'] },
  { id: 'HSO-HD5D028', name: '5MP HD Dome Camera', model_number: 'ST-VD HD5028', category: 'HD Camera', camera_type: 'Dome', resolution: '5MP', audio: 'None', connectivity: 'Analog', description: '5MP HD dome with superior image', status: 'active', image: 'ST-VD HD5028.png', stock_quantity: 18, lens: '2.8mm', special_features: ['Night Vision', 'WDR'] },
  
  // HD Cameras - Bullet (2MP)
  { id: 'HSO-HD2B030', name: '2MP HD Bullet Camera', model_number: 'ST-VB HD2030', category: 'HD Camera', camera_type: 'Bullet', resolution: '2MP', audio: 'None', connectivity: 'Analog', description: 'Outdoor 2MP HD bullet camera', status: 'active', image: 'ST-VB HD2030.png', stock_quantity: 35, lens: '3.6mm', special_features: ['Weatherproof', 'Night Vision'] },
  { id: 'HSO-HD2B028', name: '2MP HD Bullet Camera', model_number: 'ST-VB HD2028', category: 'HD Camera', camera_type: 'Bullet', resolution: '2MP', audio: 'None', connectivity: 'Analog', description: '2MP HD bullet with wide coverage', status: 'active', image: 'ST-VB HD2028.png', stock_quantity: 32, lens: '2.8mm', special_features: ['Weatherproof', 'IR LEDs'] },
  
  // HD Cameras - Bullet (3MP)
  { id: 'HSO-HD3B030', name: '3MP HD Bullet Camera', model_number: 'ST-VB HD3030', category: 'HD Camera', camera_type: 'Bullet', resolution: '3MP', audio: 'None', connectivity: 'Analog', description: 'Professional 3MP HD bullet', status: 'active', image: 'ST-VB HD3030.png', stock_quantity: 28, lens: '3.6mm', special_features: ['Weatherproof', 'Smart IR'] },
  { id: 'HSO-HD3B028', name: '3MP HD Bullet Camera', model_number: 'ST-VB HD3028', category: 'HD Camera', camera_type: 'Bullet', resolution: '3MP', audio: 'None', connectivity: 'Analog', description: '3MP HD bullet with night vision', status: 'active', image: 'ST-VB HD3028.png', stock_quantity: 25, lens: '2.8mm', special_features: ['Weatherproof', 'Night Vision'] },
  
  // HD Cameras - Bullet (5MP)
  { id: 'HSO-HD5B030', name: '5MP HD Bullet Camera', model_number: 'ST-VB HD5030', category: 'HD Camera', camera_type: 'Bullet', resolution: '5MP', audio: 'None', connectivity: 'Analog', description: 'High-resolution 5MP HD bullet', status: 'active', image: 'ST-VB HD5030.png', stock_quantity: 22, lens: '3.6mm', special_features: ['Weatherproof', 'UTC Control'] },
  { id: 'HSO-HD5B028', name: '5MP HD Bullet Camera', model_number: 'ST-VB HD5028', category: 'HD Camera', camera_type: 'Bullet', resolution: '5MP', audio: 'None', connectivity: 'Analog', description: '5MP HD bullet with premium features', status: 'active', image: 'ST-VB HD5028.png', stock_quantity: 20, lens: '2.8mm', special_features: ['Weatherproof', 'WDR'] },
  
  // WiFi & 4G Cameras
  { id: 'HSO-WIFI2D', name: '2MP WiFi Dome Camera', model_number: 'ST-VD WIFI2', category: 'WiFi & 4G Camera', camera_type: 'Dome', resolution: '2MP', audio: 'Built-in', connectivity: 'WiFi', description: 'Wireless 2MP dome camera', status: 'active', image: 'wifi-dome-2mp.png', stock_quantity: 15, lens: '3.6mm', special_features: ['WiFi', 'Two-way Audio', 'Mobile App'] },
  { id: 'HSO-WIFI3D', name: '3MP WiFi Dome Camera', model_number: 'ST-VD WIFI3', category: 'WiFi & 4G Camera', camera_type: 'Dome', resolution: '3MP', audio: 'Built-in', connectivity: 'WiFi', description: 'Wireless 3MP dome with audio', status: 'active', image: 'wifi-dome-3mp.png', stock_quantity: 12, lens: '3.6mm', special_features: ['WiFi', 'Two-way Audio', 'Cloud Storage'] },
  { id: 'HSO-WIFI2B', name: '2MP WiFi Bullet Camera', model_number: 'ST-VB WIFI2', category: 'WiFi & 4G Camera', camera_type: 'Bullet', resolution: '2MP', audio: 'Built-in', connectivity: 'WiFi', description: 'Outdoor WiFi bullet camera', status: 'active', image: 'wifi-bullet-2mp.png', stock_quantity: 18, lens: '3.6mm', special_features: ['WiFi', 'Weatherproof', 'Mobile App'] },
  { id: 'HSO-WIFI3B', name: '3MP WiFi Bullet Camera', model_number: 'ST-VB WIFI3', category: 'WiFi & 4G Camera', camera_type: 'Bullet', resolution: '3MP', audio: 'Built-in', connectivity: 'WiFi', description: 'Wireless 3MP bullet with audio', status: 'active', image: 'wifi-bullet-3mp.png', stock_quantity: 15, lens: '3.6mm', special_features: ['WiFi', 'Weatherproof', 'Cloud Storage'] },
  { id: 'HSO-4G-CAM', name: '4G Solar Camera', model_number: 'ST-4G-SOLAR', category: 'WiFi & 4G Camera', camera_type: 'Bullet', resolution: '4MP', audio: 'Built-in', connectivity: '4G', description: 'Solar-powered 4G camera', status: 'active', image: '4g-solar-camera.png', stock_quantity: 10, lens: '3.6mm', special_features: ['4G SIM', 'Solar Panel', 'Battery Backup', 'Mobile App'] },
  
  // PT Cameras
  { id: 'HSO-PT-IP4', name: '4MP IP PT Camera', model_number: 'ST-PT IP4', category: 'IP Camera', camera_type: 'PT', resolution: '4MP', audio: 'Built-in', connectivity: 'IP', description: 'Pan-Tilt IP camera with 4MP', status: 'active', image: 'pt-ip-4mp.png', stock_quantity: 8, lens: 'Motorized', special_features: ['Pan/Tilt', 'Auto Tracking', 'Two-way Audio'] },
  { id: 'HSO-PT-IP5', name: '5MP IP PT Camera', model_number: 'ST-PT IP5', category: 'IP Camera', camera_type: 'PT', resolution: '5MP', audio: 'Built-in', connectivity: 'IP', description: 'Advanced PT camera with 5MP', status: 'active', image: 'pt-ip-5mp.png', stock_quantity: 6, lens: 'Motorized', special_features: ['Pan/Tilt', 'Auto Tracking', 'Smart Detection'] },
  { id: 'HSO-PT-WIFI', name: 'WiFi PT Camera', model_number: 'ST-PT WIFI', category: 'WiFi & 4G Camera', camera_type: 'PT', resolution: '3MP', audio: 'Built-in', connectivity: 'WiFi', description: 'Wireless PT camera', status: 'active', image: 'pt-wifi.png', stock_quantity: 12, lens: 'Motorized', special_features: ['WiFi', 'Pan/Tilt', 'Mobile App', 'Two-way Audio'] },
  
  // Fisheye Cameras
  { id: 'HSO-FISHEYE-5MP', name: '5MP Fisheye Camera', model_number: 'ST-FISHEYE-5MP', category: 'IP Camera', camera_type: 'Fisheye', resolution: '5MP', audio: 'None', connectivity: 'IP', description: '360° fisheye camera', status: 'active', image: 'fisheye-5mp.png', stock_quantity: 5, lens: '1.4mm Fisheye', special_features: ['360° View', 'Dewarping', 'PoE'] },
  { id: 'HSO-FISHEYE-12MP', name: '12MP Fisheye Camera', model_number: 'ST-FISHEYE-12MP', category: 'IP Camera', camera_type: 'Fisheye', resolution: '12MP', audio: 'None', connectivity: 'IP', description: 'Ultra HD 360° fisheye', status: 'active', image: 'fisheye-12mp.png', stock_quantity: 3, lens: '1.4mm Fisheye', special_features: ['360° View', '4K Resolution', 'Dewarping', 'PoE'] },
  
  // Special Cameras
  { id: 'HSO-LOWLIGHT-4MP', name: '4MP Low Light Color Camera', model_number: 'ST-VB IP4LL', category: 'IP Camera', camera_type: 'Bullet', resolution: '4MP', audio: 'None', connectivity: 'IP', description: 'Color night vision camera', status: 'active', image: 'lowlight-4mp.png', stock_quantity: 10, lens: '2.8mm', special_features: ['Color Night Vision', 'Low Light', 'Weatherproof'] },
  { id: 'HSO-LOWLIGHT-12MP', name: '12MP Low Light Color Camera', model_number: 'ST-VB IP12LL', category: 'IP Camera', camera_type: 'Bullet', resolution: '12MP', audio: 'None', connectivity: 'IP', description: 'Ultra HD color night vision', status: 'active', image: 'Velvu 12MP IP Low Light Color Bullet Camera ST-VB IP12002LL.png', stock_quantity: 5, lens: '2.8mm', special_features: ['Color Night Vision', '4K Resolution', 'Low Light', 'Weatherproof'] },
  
  // NVRs
  { id: 'HSO-NVR-4CH', name: '4 Channel NVR', model_number: 'ST-NVR-4CH', category: 'IP Camera', camera_type: 'NVR', resolution: '8MP', audio: 'None', connectivity: 'IP', description: '4 channel network video recorder', status: 'active', image: 'nvr-4ch.png', stock_quantity: 20, lens: 'N/A', special_features: ['4 Channels', 'H.265+', 'PoE', '1TB HDD'] },
  { id: 'HSO-NVR-8CH', name: '8 Channel NVR', model_number: 'ST-NVR-8CH', category: 'IP Camera', camera_type: 'NVR', resolution: '8MP', audio: 'None', connectivity: 'IP', description: '8 channel network video recorder', status: 'active', image: 'nvr-8ch.png', stock_quantity: 18, lens: 'N/A', special_features: ['8 Channels', 'H.265+', 'PoE', '2TB HDD'] },
  { id: 'HSO-NVR-16CH', name: '16 Channel NVR', model_number: 'ST-NVR-16CH', category: 'IP Camera', camera_type: 'NVR', resolution: '8MP', audio: 'None', connectivity: 'IP', description: '16 channel network video recorder', status: 'active', image: 'nvr-16ch.png', stock_quantity: 15, lens: 'N/A', special_features: ['16 Channels', 'H.265+', 'PoE', '4TB HDD'] },
  { id: 'HSO-NVR-32CH', name: '32 Channel NVR', model_number: 'ST-NVR-32CH', category: 'IP Camera', camera_type: 'NVR', resolution: '8MP', audio: 'None', connectivity: 'IP', description: '32 channel enterprise NVR', status: 'active', image: 'nvr-32ch.png', stock_quantity: 10, lens: 'N/A', special_features: ['32 Channels', 'H.265+', 'PoE', '8TB HDD', 'RAID'] },
  
  // DVRs
  { id: 'HSO-DVR-4CH', name: '4 Channel DVR', model_number: 'ST-DVR-4CH', category: 'HD Camera', camera_type: 'DVR', resolution: '5MP', audio: 'None', connectivity: 'Analog', description: '4 channel digital video recorder', status: 'active', image: 'dvr-4ch.png', stock_quantity: 25, lens: 'N/A', special_features: ['4 Channels', 'H.265+', '1TB HDD'] },
  { id: 'HSO-DVR-8CH', name: '8 Channel DVR', model_number: 'ST-DVR-8CH', category: 'HD Camera', camera_type: 'DVR', resolution: '5MP', audio: 'None', connectivity: 'Analog', description: '8 channel digital video recorder', status: 'active', image: 'dvr-8ch.png', stock_quantity: 22, lens: 'N/A', special_features: ['8 Channels', 'H.265+', '2TB HDD'] },
  { id: 'HSO-DVR-16CH', name: '16 Channel DVR', model_number: 'ST-DVR-16CH', category: 'HD Camera', camera_type: 'DVR', resolution: '5MP', audio: 'None', connectivity: 'Analog', description: '16 channel digital video recorder', status: 'active', image: 'dvr-16ch.png', stock_quantity: 18, lens: 'N/A', special_features: ['16 Channels', 'H.265+', '4TB HDD'] },
  { id: 'HSO-DVR-32CH', name: '32 Channel DVR', model_number: 'ST-DVR-32CH', category: 'HD Camera', camera_type: 'DVR', resolution: '5MP', audio: 'None', connectivity: 'Analog', description: '32 channel enterprise DVR', status: 'active', image: 'dvr-32ch.png', stock_quantity: 12, lens: 'N/A', special_features: ['32 Channels', 'H.265+', '8TB HDD'] },
  
  // Accessories
  { id: 'HSO-POE-SWITCH-4', name: '4 Port PoE Switch', model_number: 'ST-POE-4P', category: 'IP Camera', camera_type: 'Accessory', resolution: 'N/A', audio: 'None', connectivity: 'IP', description: '4 port PoE network switch', status: 'active', image: 'poe-switch-4.png', stock_quantity: 30, lens: 'N/A', special_features: ['4 PoE Ports', '60W Power', 'Plug & Play'] },
  { id: 'HSO-POE-SWITCH-8', name: '8 Port PoE Switch', model_number: 'ST-POE-8P', category: 'IP Camera', camera_type: 'Accessory', resolution: 'N/A', audio: 'None', connectivity: 'IP', description: '8 port PoE network switch', status: 'active', image: 'poe-switch-8.png', stock_quantity: 25, lens: 'N/A', special_features: ['8 PoE Ports', '120W Power', 'Plug & Play'] },
  { id: 'HSO-POE-SWITCH-16', name: '16 Port PoE Switch', model_number: 'ST-POE-16P', category: 'IP Camera', camera_type: 'Accessory', resolution: 'N/A', audio: 'None', connectivity: 'IP', description: '16 port PoE network switch', status: 'active', image: 'poe-switch-16.png', stock_quantity: 20, lens: 'N/A', special_features: ['16 PoE Ports', '250W Power', 'Managed'] },
  { id: 'HSO-HDD-1TB', name: '1TB Surveillance HDD', model_number: 'ST-HDD-1TB', category: 'HD Camera', camera_type: 'Accessory', resolution: 'N/A', audio: 'None', connectivity: 'SATA', description: '1TB surveillance hard drive', status: 'active', image: 'hdd-1tb.png', stock_quantity: 40, lens: 'N/A', special_features: ['24/7 Operation', '3 Year Warranty'] },
  { id: 'HSO-HDD-2TB', name: '2TB Surveillance HDD', model_number: 'ST-HDD-2TB', category: 'HD Camera', camera_type: 'Accessory', resolution: 'N/A', audio: 'None', connectivity: 'SATA', description: '2TB surveillance hard drive', status: 'active', image: 'hdd-2tb.png', stock_quantity: 35, lens: 'N/A', special_features: ['24/7 Operation', '3 Year Warranty'] },
  { id: 'HSO-HDD-4TB', name: '4TB Surveillance HDD', model_number: 'ST-HDD-4TB', category: 'HD Camera', camera_type: 'Accessory', resolution: 'N/A', audio: 'None', connectivity: 'SATA', description: '4TB surveillance hard drive', status: 'active', image: 'hdd-4tb.png', stock_quantity: 30, lens: 'N/A', special_features: ['24/7 Operation', '3 Year Warranty'] },
  { id: 'HSO-HDD-8TB', name: '8TB Surveillance HDD', model_number: 'ST-HDD-8TB', category: 'HD Camera', camera_type: 'Accessory', resolution: 'N/A', audio: 'None', connectivity: 'SATA', description: '8TB surveillance hard drive', status: 'active', image: 'hdd-8tb.png', stock_quantity: 20, lens: 'N/A', special_features: ['24/7 Operation', '3 Year Warranty'] },
  { id: 'HSO-CABLE-305M', name: 'CAT6 Cable 305m', model_number: 'ST-CAT6-305M', category: 'IP Camera', camera_type: 'Accessory', resolution: 'N/A', audio: 'None', connectivity: 'Ethernet', description: '305m CAT6 network cable roll', status: 'active', image: 'cat6-cable.png', stock_quantity: 50, lens: 'N/A', special_features: ['305m Roll', 'Outdoor Rated', 'Copper'] },
  { id: 'HSO-COAX-305M', name: 'Coaxial Cable 305m', model_number: 'ST-COAX-305M', category: 'HD Camera', camera_type: 'Accessory', resolution: 'N/A', audio: 'None', connectivity: 'Coaxial', description: '305m coaxial cable roll', status: 'active', image: 'coax-cable.png', stock_quantity: 45, lens: 'N/A', special_features: ['305m Roll', 'RG59', 'Copper'] },
  { id: 'HSO-POWER-SUPPLY', name: '12V 10A Power Supply', model_number: 'ST-PS-12V10A', category: 'HD Camera', camera_type: 'Accessory', resolution: 'N/A', audio: 'None', connectivity: 'DC', description: '12V 10A CCTV power supply', status: 'active', image: 'power-supply.png', stock_quantity: 60, lens: 'N/A', special_features: ['12V Output', '10A Current', '8 Outputs'] },
  { id: 'HSO-MONITOR-22', name: '22" CCTV Monitor', model_number: 'ST-MON-22', category: 'HD Camera', camera_type: 'Accessory', resolution: 'Full HD', audio: 'Built-in', connectivity: 'HDMI/VGA', description: '22 inch CCTV monitor', status: 'active', image: 'monitor-22.png', stock_quantity: 15, lens: 'N/A', special_features: ['Full HD', 'HDMI', 'VGA', 'BNC'] },
  { id: 'HSO-MONITOR-27', name: '27" CCTV Monitor', model_number: 'ST-MON-27', category: 'HD Camera', camera_type: 'Accessory', resolution: 'Full HD', audio: 'Built-in', connectivity: 'HDMI/VGA', description: '27 inch CCTV monitor', status: 'active', image: 'monitor-27.png', stock_quantity: 12, lens: 'N/A', special_features: ['Full HD', 'HDMI', 'VGA', 'BNC'] },
  { id: 'HSO-BRACKET-WALL', name: 'Wall Mount Bracket', model_number: 'ST-BRACKET-WALL', category: 'HD Camera', camera_type: 'Accessory', resolution: 'N/A', audio: 'None', connectivity: 'N/A', description: 'Universal wall mount bracket', status: 'active', image: 'bracket-wall.png', stock_quantity: 100, lens: 'N/A', special_features: ['Universal Fit', 'Aluminum', 'Weatherproof'] },
  { id: 'HSO-BRACKET-POLE', name: 'Pole Mount Bracket', model_number: 'ST-BRACKET-POLE', category: 'HD Camera', camera_type: 'Accessory', resolution: 'N/A', audio: 'None', connectivity: 'N/A', description: 'Pole mount bracket for cameras', status: 'active', image: 'bracket-pole.png', stock_quantity: 80, lens: 'N/A', special_features: ['Adjustable', 'Aluminum', 'Weatherproof'] },
  { id: 'HSO-JUNCTION-BOX', name: 'Junction Box', model_number: 'ST-JBOX', category: 'HD Camera', camera_type: 'Accessory', resolution: 'N/A', audio: 'None', connectivity: 'N/A', description: 'Weatherproof junction box', status: 'active', image: 'junction-box.png', stock_quantity: 90, lens: 'N/A', special_features: ['Weatherproof', 'Cable Management', 'Aluminum'] },
];

async function setupFreshDatabase() {
  console.log('🚀 Setting up fresh HSO CCTV database...\n');
  console.log(`📍 Target: ${SUPABASE_URL}\n`);

  try {
    // Check if tables exist
    console.log('🔍 Checking database tables...');
    const { count: productCount } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true });

    if (productCount && productCount > 0) {
      console.log(`⚠️  Warning: Database already has ${productCount} products`);
      console.log('Do you want to continue? This will add more products.');
      console.log('Press Ctrl+C to cancel, or wait 5 seconds to continue...\n');
      await new Promise(resolve => setTimeout(resolve, 5000));
    }

    // Insert products in batches
    console.log('📦 Inserting products...');
    const batchSize = 10;
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < products.length; i += batchSize) {
      const batch = products.slice(i, i + batchSize);
      
      const { error } = await supabase
        .from('products')
        .upsert(batch, { onConflict: 'id' });

      if (error) {
        console.error(`   ❌ Batch ${Math.floor(i / batchSize) + 1} failed:`, error.message);
        failCount += batch.length;
      } else {
        console.log(`   ✅ Inserted batch ${Math.floor(i / batchSize) + 1} (${batch.length} products)`);
        successCount += batch.length;
      }
    }

    console.log(`\n✅ Products inserted: ${successCount} success, ${failCount} failed\n`);

    // Insert dashboard stats
    console.log('📊 Setting up dashboard stats...');
    const { error: statsError } = await supabase
      .from('dashboard_stats')
      .upsert([{
        total_products: products.length,
        total_orders: 0,
        pending_orders: 0,
        orders_this_week: 0,
        views_this_week: 0,
        cart_adds_this_week: 0
      }], { onConflict: 'id' });

    if (statsError) {
      console.error('   ❌ Failed:', statsError.message);
    } else {
      console.log('   ✅ Dashboard stats created\n');
    }

    // Verify
    console.log('🔍 Verifying setup...');
    const { count: finalCount } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true });

    console.log(`   Total products in database: ${finalCount || 0}\n`);

    console.log('✅ Fresh database setup completed!\n');
    console.log('🎯 Next steps:');
    console.log('   1. Run "npm run upload:images" to upload product images');
    console.log('   2. Create admin user in Supabase Dashboard');
    console.log('   3. Test the application with "npm run dev"');
    console.log('   4. Deploy to production\n');

  } catch (error: any) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

// Run setup
setupFreshDatabase();
