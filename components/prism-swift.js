// by Nate Cook
// version 1.0, June 11, 2014
// issues: nested multiline comments, highlighting inside string interpolations
Prism.languages.swift = Prism.languages.extend('clike', {
	'keyword': /\b(as|associativity|break|case|class|continue|default|deinit|didSet|do|dynamicType|else|enum|extension|fallthrough|for|func|get|if|import|in|infix|init|inout|is|left|let|mutating|new|none|nonmutating|operator|override|postfix|precedence|prefix|protocol|return|right|self|Self|set|static|struct|subscript|super|switch|Type|typealias|unowned|unowned\(safe\)|unowned\(unsafe\)|var|weak|where|while|willSet)\b/g,
	'number': /\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/gi,
	'atrule': /\@\b(assignment|class_protocol|exported|final|lazy|noreturn|NSCopying|NSManaged|objc|optional|required|auto_closure|noreturn)\b/g,
	'important': /\b(AbsoluteValuable|Any|AnyClass|Array|ArrayBound|ArrayBuffer|ArrayBufferType|ArrayLiteralConvertible|ArrayType|AutoreleasingUnsafePointer|BidirectionalIndex|Bit|BitwiseOperations|Bool|C|CBool|CChar|CChar16|CChar32|CConstPointer|CConstVoidPointer|CDouble|CFloat|CInt|CLong|CLongLong|CMutablePointer|CMutableVoidPointer|COpaquePointer|CShort|CSignedChar|CString|CUnsignedChar|CUnsignedInt|CUnsignedLong|CUnsignedLongLong|CUnsignedShort|CVaListPointer|CVarArg|CWideChar|Character|CharacterLiteralConvertible|Collection|CollectionOfOne|Comparable|ContiguousArray|ContiguousArrayBuffer|DebugPrintable|Dictionary|DictionaryGenerator|DictionaryIndex|DictionaryLiteralConvertible|Double|EmptyCollection|EmptyGenerator|EnumerateGenerator|Equatable|ExtendedGraphemeClusterLiteralConvertible|ExtendedGraphemeClusterType|ExtensibleCollection|FilterCollectionView|FilterCollectionViewIndex|FilterGenerator|FilterSequenceView|Float|Float32|Float64|Float80|FloatLiteralConvertible|FloatLiteralType|FloatingPointClassification|FloatingPointNumber|ForwardIndex|Generator|GeneratorOf|GeneratorOfOne|GeneratorSequence|Hashable|HeapBuffer|HeapBufferStorage|HeapBufferStorageBase|ImplicitlyUnwrappedOptional|IndexingGenerator|Int|Int16|Int32|Int64|Int8|IntEncoder|IntMax|Integer|IntegerArithmetic|IntegerLiteralConvertible|IntegerLiteralType|Less|LifetimeManager|LogicValue|MapCollectionView|MapSequenceGenerator|MapSequenceView|MaxBuiltinFloatType|MaxBuiltinIntegerType|Mirror|MirrorDisposition|MutableCollection|MutableSliceable|ObjectIdentifier|OnHeap|Optional|OutputStream|PermutationGenerator|Printable|QuickLookObject|RandomAccessIndex|Range|RangeGenerator|RawByte|RawOptionSet|RawRepresentable|Reflectable|Repeat|ReverseIndex|ReverseRange|ReverseRangeGenerator|ReverseView|Sequence|SequenceOf|SignedInteger|SignedNumber|Sink|SinkOf|Slice|SliceBuffer|Sliceable|StaticString|Streamable|StridedRangeGenerator|String|StringElement|StringInterpolationConvertible|StringLiteralConvertible|StringLiteralType|UInt|UInt16|UInt32|UInt64|UInt8|UIntMax|UTF16|UTF32|UTF8|UWord|UnicodeCodec|UnicodeScalar|Unmanaged|UnsafeArray|UnsafePointer|UnsignedInteger|Void|Word|Zip2|ZipGenerator2|abs|advance|alignof|alignofValue|assert|bridgeFromObjectiveC|bridgeFromObjectiveCUnconditional|bridgeToObjectiveC|bridgeToObjectiveCUnconditional|c|contains|count|countElements|countLeadingZeros|debugPrint|debugPrintln|distance|dropFirst|dropLast|dump|encodeBitsAsWords|enumerate|equal|false|filter|find|getBridgedObjectiveCType|getVaList|indices|insertionSort|isBridgedToObjectiveC|isBridgedVerbatimToObjectiveC|isUniquelyReferenced|join|lexicographicalCompare|map|max|maxElement|min|minElement|nil|numericCast|partition|posix|print|println|quickSort|reduce|reflect|reinterpretCast|reverse|roundUpToAlignment|sizeof|sizeofValue|sort|split|startsWith|strideof|strideofValue|swap|swift|toString|transcode|true|underestimateCount|unsafeReflect|withExtendedLifetime|withObjectAtPlusZero|withUnsafePointer|withUnsafePointerToObject|withUnsafePointers|withVaList)\b/g
});
