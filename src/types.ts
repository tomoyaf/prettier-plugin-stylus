import stylus from 'stylus';
type Stylus = typeof stylus;
type Nodes = Stylus['nodes'];

export namespace Stylus {
  export interface Token {
    type: string;
    val: Node;
  }
  export type Root = InstanceType<Nodes['Root']>;
  export type Block = InstanceType<Nodes['Block']>;
  export type Group = InstanceType<Nodes['Group']>;
  export type Selector = InstanceType<Nodes['Selector']>;
  export type Ident = InstanceType<Nodes['Ident']>;
  export type Property = InstanceType<Nodes['Property']>;
  export type Expression = InstanceType<Nodes['Expression']>;
  export type Literal = InstanceType<Nodes['Literal']>;
  export type Call = InstanceType<Nodes['Call']>;
  export type Arguments = InstanceType<Nodes['Arguments']>;
  export type Unit = InstanceType<Nodes['Unit']>;
  export type Each = InstanceType<Nodes['Each']>;
  export type Function = InstanceType<Nodes['Function']>;
  export type Params = InstanceType<Nodes['Params']>;
  export type BinOp = InstanceType<Nodes['BinOp']>;
  export type Comment = InstanceType<Nodes['Comment']>;
  export type String = InstanceType<Nodes['String']>;
  export type RGBA = InstanceType<Nodes['RGBA']>;
  export type Keyframes = InstanceType<Nodes['Keyframes']>;
  export type UnaryOp = InstanceType<Nodes['UnaryOp']>;
  export type Media = InstanceType<Nodes['Media']>;
  export type QueryList = InstanceType<Nodes['QueryList']>;
  export type Query = InstanceType<Nodes['Query']>;
  export type Feature = {
    segments: Node[];
    expr: Node;
  };
  export type Import = InstanceType<Nodes['Import']>;
  export type Atrule = InstanceType<Nodes['Atrule']>;
  export type Node = Omit<InstanceType<Nodes['Node']>, 'nodeName'> &
    (
      | ({ nodeName: 'root' } & Root)
      | ({ nodeName: 'block' } & Block)
      | ({ nodeName: 'group' } & Group)
      | ({ nodeName: 'selector' } & Selector)
      | ({ nodeName: 'ident' } & Ident)
      | ({ nodeName: 'property' } & Property)
      | ({ nodeName: 'expression' } & Expression)
      | ({ nodeName: 'literal' } & Literal)
      | ({ nodeName: 'call' } & Call)
      | ({ nodeName: 'arguments' } & Arguments)
      | ({ nodeName: 'unit' } & Unit)
      | ({ nodeName: 'each' } & Each)
      | ({ nodeName: 'function' } & Function)
      | ({ nodeName: 'params' } & Params)
      | ({ nodeName: 'binop' } & BinOp)
      | ({ nodeName: 'comment' } & Comment)
      | ({ nodeName: 'string' } & String)
      | ({ nodeName: 'rgba' } & RGBA)
      | ({ nodeName: 'keyframes' } & Keyframes)
      | ({ nodeName: 'unaryop' } & UnaryOp)
      | ({ nodeName: 'media' } & Media)
      | ({ nodeName: 'querylist' } & QueryList)
      | ({ nodeName: 'query' } & Query)
      | ({ nodeName: 'feature' } & Feature)
      | ({ nodeName: 'import' } & Import)
      | ({ nodeName: 'atrule' } & Atrule)
    );
}
