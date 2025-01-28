import * as React from 'react';
import './App.css';
import Hello from './components/Hello';

const logo = require('./logo.svg');

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Hello name="TypeScript" />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Menu, Search, Heart, Share2, ChevronRight } from 'lucide-react';

// 定义配色常量
const COLORS = {
  ruYao: '#7EC4CF',      // 天青釉
  moonWhite: '#F3F5F7',  // 月白绢色
  boneWhite: '#EFE7DB',  // 定窑牙白
  ciBlack: '#2E2A28',    // 磁州窑黑釉
  junPurple: '#6A4A7D',  // 钧窑紫斑
  longquanCeladon: '#478384', // 龙泉青瓷
  cinnabar: '#C53D34',   // 朱砂红
  mudGold: '#D4AF37'     // 泥金
};

const products = [
  {
    id: 1,
    name: '「馥蕊」黄牡丹绒花簪',
    description: '层层叠叠的花瓣绽放，金黄色调温润柔和，配以翠绿叶片点缀',
    price: '¥1,280',
    category: 'hairpin',
    imageUrl: '/api/placeholder/400/400'
  },
  {
    id: 2,
    name: '「清莲」蓝莲绒花簪',
    description: '天青色莲瓣层叠，配以珍珠流苏，展现东方美学意境',
    price: '¥1,680',
    category: 'hairpin',
    imageUrl: '/api/placeholder/400/400'
  },
  {
    id: 3,
    name: '「暖春」粉茶花发钗',
    description: '粉色茶花层层绽放，配以金丝点缀，雅致脱俗',
    price: '¥1,480',
    category: 'hairpin',
    imageUrl: '/api/placeholder/400/400'
  },
  {
    id: 4,
    name: '「红韵」山茶花簪',
    description: '红色山茶花瓣饱满欲滴，搭配翠绿叶片，灵动雅致',
    price: '¥1,380',
    category: 'hairpin',
    imageUrl: '/api/placeholder/400/400'
  }
];

const JewelryShowcase = () => {
  const [scrollY, setScrollY] = useState(0);

  // 视差滚动效果
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#7EC4CF] relative overflow-hidden">
      {/* 背景装饰层 */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-20" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* 导航栏 */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#7EC4CF]/5 border-b border-[#478384]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-[#2E2A28] text-xl font-bold">匠心绒艺</div>
              <div className="hidden md:flex space-x-6">
                {['首页', '绒花工艺', '缠花艺术', '传统首饰', '匠人故事'].map((item) => (
                  <button
                    key={item}
                    className="text-[#2E2A28] hover:text-[#6A4A7D] transition-colors duration-300 px-3 py-2 rounded-md relative group"
                  >
                    {item}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#478384] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-[#2E2A28] cursor-pointer hover:text-[#6A4A7D]" />
              <Menu className="md:hidden w-5 h-5 text-[#2E2A28]" />
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区 */}
      <main className="pt-24 pb-16">
        {/* 头部展示区 */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7EC4CF]" />
          <div className="relative z-10 text-center">
            <h1 className="text-5xl text-[#2E2A28] mb-6 font-bold">
              传承千年工艺
            </h1>
            <p className="text-xl text-[#2E2A28]/80 max-w-2xl mx-auto">
              以丝绸为媒，以巧手为笔，绘制传统与现代交织的美学图景
            </p>
          </div>
        </section>

        {/* 作品展示区 */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group relative overflow-hidden backdrop-blur-md bg-[#F3F5F7]/30 border border-[#478384]/20 hover:border-[#478384]/50 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 transform opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-xl text-[#2E2A28] font-bold mb-2">{product.name}</h3>
                  <p className="text-[#2E2A28]/70 mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#6A4A7D] text-lg font-bold">{product.price}</span>
                    <button className="px-4 py-2 bg-[#6A4A7D] text-white rounded-md hover:bg-[#6A4A7D]/90 transition-colors duration-300">
                      了解详情
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 工艺介绍区 */}
        <section className="bg-[#EFE7DB] py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl text-[#2E2A28] font-bold text-center mb-16">匠心工艺</h2>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/600/600"
                    alt="绒花工艺"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A28]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-4">绒花技艺</h3>
                    <p className="mb-4">传承自宋代的丝绸工艺，每一片花瓣都凝聚着匠人的智慧与耐心</p>
                    <button className="flex items-center text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors">
                      了解更多 <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/600/600"
                    alt="缠花工艺"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A28]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-4">缠花技艺</h3>
                    <p className="mb-4">以金属丝为骨，彩线为衣，编织出绚丽多彩的立体艺术</p>
                    <button className="flex items-center text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors">
                      了解更多 <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default JewelryShowcase;
