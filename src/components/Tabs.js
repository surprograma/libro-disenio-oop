import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Codigo = ({ children }) => children;

export const KotlinTypescript = ({ children }) => (
  <Tabs
    groupId="lenguaje-oop"
    defaultValue="kt"
    values={[
      { label: 'Kotlin', value: 'kt' },
      { label: 'TypeScript', value: 'ts' },
    ]}
  >
    <TabItem value="kt">{children[0]}</TabItem>
    <TabItem value="ts">{children[1]}</TabItem>
  </Tabs>
);

export const SistemaOperativo = ({ children }) => (
  <Tabs
    groupId="sistema-operativo"
    defaultValue="ubuntu"
    values={[
      { label: 'Ubuntu/Debian', value: 'ubuntu' },
      { label: 'Windows', value: 'windows' },
    ]}
  >
    <TabItem value="ubuntu">{children[0]}</TabItem>
    <TabItem value="windows">{children[1]}</TabItem>
  </Tabs>
);
