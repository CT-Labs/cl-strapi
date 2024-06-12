import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

export interface PageInfoPageInfgo extends Schema.Component {
  collectionName: 'components_page_info_page_infgos';
  info: {
    displayName: 'PageInfgo';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'faq.faq': FaqFaq;
      'page-info.page-infgo': PageInfoPageInfgo;
    }
  }
}
